'use client'

import { map } from 'lodash';
import { Button } from '@repo/ui/widgets/button';
import ButtonGroup from '@repo/ui/wrappers/button-group';
import { useHistoric } from '@repo/patterns/contexts/historic-context';
import { useCustomQuery } from '../../../../../../packages/patterns/src/hooks/use-custom-query';
import { HistoricActionTypes } from '../../../../../../packages/patterns/src/reducers/historic-reducer/interfaces';

const Buttons = () => {
  const { historic, set_historic } = useHistoric();

  const { isLoading: loading_pairs } = useCustomQuery({
    key: ['pairs'],
    url: '/pairs',
    options: {
      enabled: !historic.pair,
      onSuccess: (data) => {
        const result = map(data, (value, key) => ({ key, value }));
        set_historic({
          type: HistoricActionTypes.SET_PAIRS,
          payload: result,
        });
        set_historic({
          type: HistoricActionTypes.SET_PAIR,
          payload: result[0]?.key,
        });
      }
    },
  });

  const { isLoading: loading_currency } = useCustomQuery({
    key: ['historic-data', historic.pair],
    url: `/historic-data/${historic.pair}`,
    options: {
      enabled: !!historic.pair,
      onSuccess: (data) => {
        set_historic({
          type: HistoricActionTypes.SET_METADATA,
          payload: data['Meta Data'],
        });
        set_historic({
          type: HistoricActionTypes.SET_TIME_SERIES,
          payload: data['Time Series FX'],
        });
      }
    },
  });

  const handle_change_pair = (pair: string) => {
    set_historic({
      type: HistoricActionTypes.SET_PAIR,
      payload: pair,
    });
  }

  return (
    <ButtonGroup>
      {
        historic.pairs.map((pair: { key: string, value: string }) => {
          return (
            <Button active={historic.pair === pair.key} key={pair.key} onClick={() => handle_change_pair(pair.key)}>{pair.value}</Button>
          );
        })
      }
    </ButtonGroup>
  );
}

export default Buttons;