'use client'

import { useWebSocket } from '../../../packages/patterns/src/hooks/use-web-socket';
import { Container } from '@repo/ui/wrappers/container';
import Buttons from 'src/components/pages/home/buttons';
import Columns from '@repo/ui/widgets/columns';
import HistoricPrices from 'src/components/pages/home/historic-prices';
import DailyTrend from 'src/components/pages/home/daily-trend';

const Home = () => {
  const { data, connected } = useWebSocket();
console.log(data)
  return (
    <main>
      <Container className="home-page">
        <Buttons />
        <Columns sm={1} md={2} lg={2} xl={2}>
          <HistoricPrices />
          <DailyTrend />
        </Columns>
      </Container>
    </main>
  );
}

export default Home;