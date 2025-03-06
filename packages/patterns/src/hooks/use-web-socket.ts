import { useEffect, useState } from 'react';

const SOCKET_URL = 'wss://fe-challenge.cicadatech.net/live-data';

export const useWebSocket = () => {
  const [socket, set_socket] = useState<WebSocket | null>(null);
  const [data, set_data] = useState<any>(null);
  const [error, set_error] = useState<any>(null);
  const [connected, set_connected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(SOCKET_URL);

    ws.onopen = () => {
      set_connected(true);
    }

    ws.onmessage = (event) => {
      try {
        set_data(JSON.parse(event.data));
      } catch (error) {
        set_data(event.data);
      }
    }

    ws.onerror = (error) => {
      set_error(error);
    }

    ws.onclose = () => {
      set_connected(false);
    }

    set_socket(ws);

    return () => {
      ws.close();
    }
  }, []);

  return { socket, data, error, connected }
}