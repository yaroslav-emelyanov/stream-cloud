import { CircularProgress } from '@mui/material';
import React from 'react';

import {
  EndMessage,
  ProgressWrapper,
  InfiniteScrollContainer,
  InfiniteScroll as InfiniteScrollOriginal,
} from './styles';

interface InfiniteScrollProps {
  dataLength: number;
  hasMore: boolean;
  next: () => any;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  dataLength,
  next,
  hasMore,
  children,
}) => {
  return (
    <InfiniteScrollContainer id="scrollable-container-id">
      <InfiniteScrollOriginal
        dataLength={dataLength}
        next={next}
        scrollableTarget="scrollable-container-id"
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
        {children}
      </InfiniteScrollOriginal>
    </InfiniteScrollContainer>
  );
};

export default InfiniteScroll;
