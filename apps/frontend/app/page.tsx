'use client'

import Image, { type ImageProps } from 'next/image';
import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import { useWebSocket } from '@repo/patterns/hooks';

const Home = () => {
  const { data, connected } = useWebSocket();

  return (
    <div className={styles.page}>
      <h1>📡 WebSocket Live Data</h1>
      <p>Estado: {connected ? "🟢 Conectado" : "🔴 Desconectado"}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Home;