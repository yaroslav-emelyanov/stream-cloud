import React, { Suspense } from 'react';

import Loading from '@components/Loading';

import { ContentWrapper } from './styles';

const EmptyLayout: React.FC = ({ children }) => {
  return (
    <ContentWrapper>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ContentWrapper>
  );
};

export default EmptyLayout;
