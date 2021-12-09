import React from 'react';

import {
  pagination,
  useSerials,
  useHasMorePages,
  useIsLoadingSerials,
} from '@entities/serial';

import InfiniteScroll from '@components/InfiniteScroll';

import { useSerialsGate } from './model';

import SerialCard from './SerialCard';
import Filters from './Filters';

const SerialsPage = () => {
  const isLoading = useIsLoadingSerials();
  const hasMore = useHasMorePages();
  const serials = useSerials();

  useSerialsGate();

  return (
    <InfiniteScroll
      hasMore={hasMore}
      loading={isLoading}
      filters={<Filters />}
      loadMore={pagination.nextPage}
    >
      {serials.map((serial) => (
        <SerialCard serial={serial} key={serial.id} />
      ))}
    </InfiniteScroll>
  );
};

export default SerialsPage;
