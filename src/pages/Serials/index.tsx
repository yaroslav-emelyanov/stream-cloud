import React from 'react';

import { useSerials, useHasMorePages, pagination } from '@entities/serial';
import { CircularProgress } from '@mui/material';
import SerialCard from '@components/SerialCard';

import { useSerialsGate } from './model';
import { EndMessage, ProgressWrapper, InfiniteScroll } from './styles';

const SerialsPage = () => {
  const hasMore = useHasMorePages();
  const serials = useSerials();

  useSerialsGate();

  return (
    <InfiniteScroll
      dataLength={serials.length}
      next={pagination.nextPage}
      endMessage={
        <EndMessage variant="body1" align="center">
          Больше нет записей
        </EndMessage>
      }
      loader={
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      }
      hasMore={hasMore}
    >
      {serials.map((serial) => (
        <SerialCard serial={serial} onClick={() => {}} key={serial.id} />
      ))}
    </InfiniteScroll>
  );
};

export default SerialsPage;
