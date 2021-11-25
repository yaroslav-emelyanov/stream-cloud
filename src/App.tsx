import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterView from './router-view';

const App = () => {
  return (
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  );
};

export default App;
