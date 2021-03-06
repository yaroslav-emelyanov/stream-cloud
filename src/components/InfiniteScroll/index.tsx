import React from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { CircularProgress } from '@mui/material';

import {
  Filters,
  EndMessage,
  ProgressWrapper,
  InfiniteScrollContainer,
} from './styles';

interface InfiniteScrollProps {
  loading: boolean;
  hasMore: boolean;
  loadMore: () => any;
  filters?: React.ReactNode;
  children?: React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  loading,
  loadMore,
  hasMore,
  children,
  filters,
}) => {
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    delayInMs: 250,
    rootMargin: '0px',
  });

  return (
    <InfiniteScrollContainer style={{ paddingTop: filters ? 0 : undefined }}>
      {filters && <Filters>{filters}</Filters>}

      {children}

      {(loading || hasMore) && (
        <ProgressWrapper ref={sentryRef}>
          <CircularProgress />
        </ProgressWrapper>
      )}

      {!loading && !hasMore && (
        <EndMessage variant="body1" align="center">
          Больше нет записей
        </EndMessage>
      )}
    </InfiniteScrollContainer>
  );
};

export default InfiniteScroll;
