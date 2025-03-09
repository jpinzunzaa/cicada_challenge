'use client'

import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import { useWebSocket } from '../../../../../../packages/patterns/src/hooks/use-web-socket';

interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const HistoricChart = () => {
  const { data, connected } = useWebSocket();
  const { historic } = useHistoric();

  const time_series = [...historic.time_series].reverse();

  const min_value = Math.min(...time_series.map((d: MarketData) => d.open));
  const max_value = Math.max(...time_series.map((d: MarketData) => d.open));
  const last_value = time_series[time_series.length - 1]?.open;

  const total_ticks = 16;
  const filtered_data = historic.time_series.filter((_: MarketData, index: number, array: MarketData[]) => {
    return index % Math.ceil(array.length / total_ticks) === 0;
  });

  return (
    <section className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={time_series}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid stroke="#47494E" />
          <XAxis 
            dataKey="date"
            stroke="#aaa"
            tick={{ fill: 'white', fontSize: 12, fontFamily: 'Roboto Mono', textAnchor: 'end' }}
            tickFormatter={(value) => moment(value).format('MMM DD')}
            ticks={filtered_data.map((d: MarketData) => d.date)}
          />
          <YAxis
            stroke="#aaa"
            tick={{
              fill: 'white',
              fontSize: 12,
              fontFamily: 'Roboto Mono',
            }}
            domain={[min_value * 0.95, max_value * 1.05]}
            orientation="right"
            tickCount={10}
            tickFormatter={(value) => value.toFixed(3)}
            tickLine={false}
          />
          <ReferenceLine
            y={last_value}
            stroke="transparente"
            strokeWidth={2}
            strokeDasharray="5 5"
            label={{
              value: last_value?.toFixed(3),
              position: 'right',
              fill: '#ECC94B',
              fontSize: 12,
              fontFamily: 'Roboto Mono',
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1A202C', border: 'none', color: '#FFF' }}
            itemStyle={{ color: '#fff' }}
            labelFormatter={(value) => moment(value).format("MMM DD, YYYY HH:mm")}
            formatter={(value: number) => value.toFixed(3)}
          />
          <Line
            type="bump"
            dataKey="open"
            stroke="#ECC94B"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default HistoricChart;