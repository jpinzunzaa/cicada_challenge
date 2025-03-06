'use client'

import Image, { type ImageProps } from 'next/image';
import { Button } from '@repo/ui/widgets/button';
import { useWebSocket } from '@repo/patterns/hooks';

const Home = () => {
  const { data, connected } = useWebSocket();
console.log(data)
  return (
    <main>
      <h1>📡 WebSocket Live Data</h1>
      <p>Estado: {connected ? "🟢 Conectado" : "🔴 Desconectado"}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default Home;