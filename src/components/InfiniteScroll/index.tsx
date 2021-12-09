import React, { useState } from 'react';

import { CircularProgress, Slide, useScrollTrigger } from '@mui/material';

import {
  Filters,
  EndMessage,
  ProgressWrapper,
  InfiniteScrollContainer,
  InfiniteScroll as InfiniteScrollOriginal,
} from './styles';

interface InfiniteScrollProps {
  dataLength: number;
  hasMore: boolean;
  next: () => any;
  filters?: React.ReactNode;
  children?: React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  dataLength,
  next,
  hasMore,
  children,
  filters,
}) => {
  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>(
    undefined
  );
  const trigger = useScrollTrigger({ target: scrollTarget });

  return (
    <InfiniteScrollContainer
      id="scrollable-container-id"
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
    >
      {filters && (
        <Slide direction="down" in={!trigger}>
          <Filters>{filters}</Filters>
        </Slide>
      )}
      <InfiniteScrollOriginal
        style={{ paddingTop: filters ? 0 : undefined }}
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
