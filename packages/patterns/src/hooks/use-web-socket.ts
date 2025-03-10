import { useEffect, useState, useRef } from 'react';

const SOCKET_URL = 'wss://fe-challenge.cicadatech.net/live-data';

export const useWebSocket = () => {
  const [data, set_data] = useState<any>(null);
  const [error, set_error] = useState<any>(null);
  const [connected, set_connected] = useState(false);
  const socket_ref = useRef<WebSocket | null>(null);
  const reconnect_attempts = useRef(0);
  const max_reconnect_attempts = 10;

  const connect_web_socket = () => {
    if (socket_ref.current) {
      socket_ref.current.close();
    }

    const ws = new WebSocket(SOCKET_URL);

    ws.onopen = () => {
      set_connected(true);
      reconnect_attempts.current = 0;
    }

    ws.onmessage = (event) => {
      try {
        set_data(JSON.parse(event.data));
      } catch (error) {
        set_data(event.data);
      }
    }

    ws.onerror = (event) => {
      set_error(event);
    }

    ws.onclose = (event) => {
      set_connected(false);

      if (!event.wasClean && reconnect_attempts.current < max_reconnect_attempts) {
        const retry_delay = Math.min(1000 * 2 ** reconnect_attempts.current, 30000);
        reconnect_attempts.current += 1;

        setTimeout(connect_web_socket, retry_delay);
      }
    }

    socket_ref.current = ws;
  }

  useEffect(() => {
    connect_web_socket();

    return () => {
      socket_ref.current?.close();
    }
  }, []);

  return { socket: socket_ref.current, data, error, connected }
}