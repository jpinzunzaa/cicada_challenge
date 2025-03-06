'use client'

import { Button } from '@repo/ui/widgets/button';
import { useWebSocket } from '@repo/patterns/hooks';
import { Container } from '@repo/ui/wrappers/container';
import ButtonGroup from '@repo/ui/wrappers/button-group';

const Home = () => {
  const { data, connected } = useWebSocket();
console.log(data)
  return (
    <main>
      <Container>
        <ButtonGroup>
          <Button onClick={() => {}}>hola</Button>
          <Button onClick={() => {}} active>hola</Button>
          <Button onClick={() => {}}>hola</Button>
        </ButtonGroup>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </main>
  );
}

export default Home;