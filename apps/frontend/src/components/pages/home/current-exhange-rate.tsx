'use client';

import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import { useWebSocket } from '../../../../../../packages/patterns/src/hooks/use-web-socket';
import Skeleton from '@repo/ui/widgets/skeleton';

const CurrentExchangeRate = () => {
  const { data, connected } = useWebSocket();
  const { historic } = useHistoric();
  const [point, set_point] = useState<null | number>(null);

  useEffect(() => {
    if (historic.loading_pair) {
      set_point(null);
    }
  }, [historic.loading_pair]);

  useEffect(() => {
    if (data && data.pair === historic.pair) {
      set_point(data.point);
    }
  }, [data]);


  return (
    <div className="exchange">
      <p className="label">Last Update (UTC)</p>
      {
        (historic.loading_pair && historic.time_series.length > 0 && point !== null) ? (
          <Skeleton width="60px" height="16px" radius="0" />
        ) : (
          <p className={classnames('value', { 'success': point && point > historic.time_series[0].open, 'danger': point && point < historic.time_series[0].open })}>{point?.toFixed(3)}</p>
        )
      }
    </div>
  );
}

export default CurrentExchangeRate;