'use client'

import { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import CurrentExchangeRate from './current-exhange-rate';
import Skeleton from '@repo/ui/widgets/skeleton';
import { exchange_rate_min_max } from '../../../../../../packages/utils/src/calculations';

const Banner = () => {
  const { historic } = useHistoric();
  const { max, min } = exchange_rate_min_max(historic.time_series);
  const [last_update, set_last_update] = useState<string | null>(null);

  useEffect(() => {
    if (historic.time_series.length > 0) {
      set_last_update(moment(historic.time_series[0]?.date).format('YYYY-MM-DD HH:mm:ss'));
    }
  }, [historic.time_series]);

  return (
    <section className="banner">
      <article className="currency-pair">
        <p className="label">Currency Pair</p>
        {
          historic.loading_pair ? (
            <Skeleton width="60px" height="16px" radius="0" />
          ) : (
            <p className="value">
              {historic.pair}
            </p>
          )
        }
      </article>
      <article className="exchanges">
        <CurrentExchangeRate />
        <div className="exchange">
          <p className="label">Highest Exchange-Rate Today</p>
          {
            historic.loading_pair ? (
              <Skeleton width="60px" height="16px" radius="0" />
            ) : (
              <p className="value">
                {max?.toFixed(3)}
              </p>
            )
          }
        </div>
        <div className="exchange">
          <p className="label">Lowest Exchange-Rate Today</p>
          {
            historic.loading_pair ? (
              <Skeleton width="60px" height="16px" radius="0" />
            ) : (
              <p className="value">
                {min?.toFixed(3)}
              </p>
            )
          }
        </div>
        <div className="exchange">
          <p className="label">Last Update (UTC)</p>
          {
            historic.loading_pair && historic.time_series.length > 0 ? (
              <Skeleton width="60px" height="16px" radius="0" />
            ) : (
              <p className="value">{last_update}</p>
            )
          }
        </div>
      </article>
    </section>
  );
}

export default Banner;