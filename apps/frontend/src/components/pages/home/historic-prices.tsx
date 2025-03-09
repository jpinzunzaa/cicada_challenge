'use client'

import moment from 'moment';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import Table from '@repo/ui/widgets/table';

interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const HistoricPrices = () => {
  const { historic } = useHistoric();

  return (
    <Table>
      <Table.Title>
        Historic Prices
      </Table.Title>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell className="right">High</Table.Cell>
          <Table.Cell className="right">Low</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {
          historic.time_series.length > 0 &&
          historic.time_series.slice(0, 5).map((time_serie: MarketData) => (
            <Table.Row key={time_serie.date}>
              <Table.Cell>{moment(time_serie.date).format("MMM-DD-YYYY")}</Table.Cell>
              <Table.Cell className="right">{time_serie.high.toFixed(3)}</Table.Cell>
              <Table.Cell className="right">{time_serie.low.toFixed(3)}</Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}

export default HistoricPrices;