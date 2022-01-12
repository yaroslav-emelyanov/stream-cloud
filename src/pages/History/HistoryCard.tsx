import React, { useMemo } from 'react';
import dayjs from 'dayjs';

import Card from '@components/Card';
import { HistoryItem, useHistoryMovie } from '@entities/history';
import { likeFilm, useIsFavorite } from '@entities/favorite';
import { useNav } from '@shared/hooks';

interface HistoryCardProps {
  historyItem: HistoryItem;
  prevHistoryDate?: string;
}

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_NOW = dayjs().format(DATE_FORMAT);

const HistoryCard: React.FC<HistoryCardProps> = ({
  historyItem,
  prevHistoryDate,
}) => {
  const historyMovie = useHistoryMovie(historyItem.kinopoiskId.toString());
  const isFavorite = useIsFavorite(historyItem.kinopoiskId.toString());
  const nav = useNav();

  const [date, prevDate] = useMemo(
    () => [
      dayjs(historyItem.created).format(DATE_FORMAT),
      prevHistoryDate ? dayjs(prevHistoryDate).format(DATE_FORMAT) : null,
    ],
    [historyItem.created, prevHistoryDate]
  );

  return (
    <>
      {date !== prevDate && (
        <div style={{ width: '100%' }}>
          {DATE_NOW === date ? 'Сегодня' : date}
          <hr />
        </div>
      )}
      <Card
        onClick={() => nav.to.film(historyItem?.kinopoiskId)}
        onClickIcon={() => likeFilm(historyItem.kinopoiskId.toString())}
        rating={historyMovie?.ratingKinopoisk?.toString()}
        description={
          <>
            <div>
              {[historyMovie?.year, historyMovie?.genres[0]?.genre]
                .filter(Boolean)
                .join(', ')}
            </div>
            <div>{historyMovie?.countries[0]?.country}</div>
          </>
        }
        isFavorite={isFavorite}
        posterUrl={historyMovie?.posterUrlPreview}
        title={historyMovie?.nameRu || ''}
        loading={!historyMovie}
      />
    </>
  );
};

export default HistoryCard;
