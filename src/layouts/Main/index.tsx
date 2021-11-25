import React, { Suspense } from 'react';

import Header from '@components/Header';
import Loading from '@components/Loading';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default MainLayout;
