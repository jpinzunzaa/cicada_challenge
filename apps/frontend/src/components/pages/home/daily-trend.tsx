'use client'

import moment from 'moment';
import { has } from 'lodash';
import classnames from 'classnames';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import Table from '@repo/ui/widgets/table';
import Skeleton from '@repo/ui/widgets/skeleton';
import { calculate_price_day_difference } from '../../../../../../packages/utils/src/calculations';

interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const DailyTrend = () => {
  const { historic } = useHistoric();

  return (
    <Table>
      <Table.Title>
        Daily Trend
      </Table.Title>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell className="right">Open</Table.Cell>
          <Table.Cell className="right">Close</Table.Cell>
          <Table.Cell className="right">Difference</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {
          historic.time_series.length > 0 &&
          historic.time_series.slice(0, 5).map((time_serie: MarketData) => {
            const price_difference = calculate_price_day_difference(time_serie);

            return (
              <Table.Row key={time_serie.date}>
                <Table.Cell>{historic.loading_pair ? <Skeleton width="80px" height="12px" radius="0" /> : moment(time_serie.date).format("MMM-DD-YYYY")}</Table.Cell>
                <Table.Cell className="number right">
                  {
                    historic.loading_pair ? (
                      <Skeleton width="40px" height="12px" radius="0" />
                    ) : has(time_serie, 'open') ? (
                      time_serie.open.toFixed(3)
                    ) : (
                      ''
                    )
                  }
                </Table.Cell>
                <Table.Cell className="number right">
                  {
                    historic.loading_pair ? (
                      <Skeleton width="40px" height="12px" radius="0" />
                    ) : has(time_serie, 'close') ? (
                      time_serie.close.toFixed(3)
                    ) : (
                      ''
                    )
                  }
                </Table.Cell>
                <Table.Cell
                  className={classnames('number right', {
                    danger: typeof price_difference === 'number' && price_difference < 0,
                    success: typeof price_difference === 'number' && price_difference > 0,
                  })}
                >
                  {
                    historic.loading_pair ? (
                      <Skeleton width="40px" height="12px" radius="0" />
                    ) : typeof price_difference === 'string' ? (
                      ''
                    ) : (
                      `${price_difference > 0 ? '+' : ''}${price_difference.toFixed(3)}`
                    )
                  }
                </Table.Cell>
              </Table.Row>
            );
          })
        }
      </Table.Body>
    </Table>
  );
}

export default DailyTrend;