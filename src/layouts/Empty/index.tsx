import React, { Suspense } from 'react';

import Loading from '@components/Loading';

const EmptyLayout: React.FC = ({ children }) => {
  return (
    <div>
      empty layout
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default EmptyLayout;
