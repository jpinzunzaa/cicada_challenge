'use client'

import { useWebSocket } from '../../../packages/patterns/src/hooks/use-web-socket';
import { Container } from '@repo/ui/wrappers/container';
import Buttons from 'src/components/pages/home/buttons';

const Home = () => {
  const { data, connected } = useWebSocket();
console.log(data)
  return (
    <main>
      <Container>
        <Buttons />
      </Container>
    </main>
  );
}

export default Home;