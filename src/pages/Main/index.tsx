import React from 'react';

import { usePremiers } from '@entities/premier';

import { usePageGate } from './model';
import MainCard from './MainCard';

const MainPage = () => {
  const premiers = usePremiers();

  usePageGate();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
        padding: 32,
      }}
    >
      {premiers.map((premier) => (
        <MainCard premier={premier} key={premier.kinopoiskId} />
      ))}
    </div>
  );
};

export default MainPage;
