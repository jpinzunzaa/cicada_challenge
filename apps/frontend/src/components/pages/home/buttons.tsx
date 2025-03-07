'use client'

import { useState } from 'react';
import { Button } from '@repo/ui/widgets/button';
import ButtonGroup from '@repo/ui/wrappers/button-group';
import { useCustomQuery } from '../../../../../../packages/patterns/src/hooks/use-custom-query';
import { useHistoric } from '@repo/patterns/contexts/historic-context';

const Buttons = () => {
  const { historic, set_historic } = useHistoric();
  const [pairs, set_pairs] = useState({});

  const { isLoading, error } = useCustomQuery({
    key: ['pairs'],
    url: '/historic-data/EURUSD',
    options: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        set_pairs(data)
      }
    },
  });

  return (
    <ButtonGroup>
      {
        Object.values(pairs).map((pair, i) => {
          console.log(pair)
          return (
            <Button key={i} onClick={() => {}}>hola</Button>
          )
        })
      }
    </ButtonGroup>
  );
}

export default Buttons;