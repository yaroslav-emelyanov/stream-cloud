import React from 'react';

import { useSerials, useHasMorePages, pagination } from '@entities/serial';

import InfiniteScroll from '@components/InfiniteScroll';

import { useSerialsGate } from './model';

import SerialCard from './SerialCard';

const SerialsPage = () => {
  const hasMore = useHasMorePages();
  const serials = useSerials();

  useSerialsGate();

  return (
    <InfiniteScroll
      dataLength={serials.length}
      next={pagination.nextPage}
      hasMore={hasMore}
    >
      {serials.map((serial) => (
        <SerialCard serial={serial} key={serial.id} />
      ))}
    </InfiniteScroll>
  );
};

export default SerialsPage;
