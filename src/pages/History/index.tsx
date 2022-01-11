import React from 'react';

import { useHistory } from '@entities/history';

import HistoryCard from './HistoryCard';
import { PageContainer } from './styles';
import { usePageGate } from './model';

const HistoryPage = () => {
  const history = useHistory();

  usePageGate();

  return (
    <PageContainer>
      {history.map((item, index, list) => (
        <HistoryCard
          historyItem={item}
          prevHistoryDate={list[index - 1]?.created}
          key={item.kinopoiskId}
        />
      ))}
    </PageContainer>
  );
};

export default HistoryPage;
