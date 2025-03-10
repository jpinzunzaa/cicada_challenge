'use client'

import moment from 'moment';
import { has } from 'lodash';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import Table from '@repo/ui/widgets/table';
import Skeleton from '@repo/ui/widgets/skeleton';

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
          historic.time_series.slice(0, 5).map((time_serie: MarketData) => {
            return (
              <Table.Row key={time_serie.date}>
                <Table.Cell>{historic.loading_pair ? <Skeleton width="80px" height="12px" radius="0" /> : moment(time_serie.date).format('MMM-DD-YYYY')}</Table.Cell>
                <Table.Cell className="number right">
                  {
                    historic.loading_pair ? (
                      <Skeleton width="40px" height="12px" radius="0" />
                    ) : has(time_serie, 'high') ? (
                      time_serie.high.toFixed(3)
                    ) : (
                      ''
                    )
                  }
                </Table.Cell>
                <Table.Cell className="number right">
                  {
                    historic.loading_pair ? (
                      <Skeleton width="40px" height="12px" radius="0" />
                    ) : has(time_serie, 'low') ? (
                      time_serie.low.toFixed(3)
                    ) : (
                      ''
                    )
                  }
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
    </Table>
  );
}

export default HistoricPrices;