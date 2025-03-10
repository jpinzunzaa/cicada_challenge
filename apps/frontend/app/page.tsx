'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@repo/ui/wrappers/container';
import Buttons from 'src/components/pages/home/buttons';
import Banner from 'src/components/pages/home/banner';
import Columns from '@repo/ui/widgets/columns';
import HistoricPrices from 'src/components/pages/home/historic-prices';
import DailyTrend from 'src/components/pages/home/daily-trend';
const HistoricChart = dynamic(() => import('src/components/pages/home/historic-chart'), { ssr: false });

const Home = () => {
  return (
    <main>
      <Container className="home-page">
        <Buttons />
        <Banner />
        <Columns sm={1} md={2} lg={2} xl={2}>
          <HistoricPrices />
          <DailyTrend />
        </Columns>
        <HistoricChart />
      </Container>
    </main>
  );
}

export default Home;