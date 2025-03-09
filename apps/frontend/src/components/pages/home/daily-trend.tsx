'use client'

import moment from 'moment';
import classnames from 'classnames';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import Table from '@repo/ui/widgets/table';
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
          historic.time_series.slice(0, 5).map((time_serie: MarketData) => (
            <Table.Row key={time_serie.date}>
              <Table.Cell>{moment(time_serie.date).format("MMM-DD-YYYY")}</Table.Cell>
              <Table.Cell className="right">{time_serie.open.toFixed(3)}</Table.Cell>
              <Table.Cell className="right">{time_serie.close.toFixed(3)}</Table.Cell>
              <Table.Cell className={classnames('right', { 'danger': calculate_price_day_difference(time_serie) < 0, 'success': calculate_price_day_difference(time_serie) > 0 })}>{(calculate_price_day_difference(time_serie)).toFixed(3)}</Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}

export default DailyTrend;