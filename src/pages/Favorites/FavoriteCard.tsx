import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

import Card from '@components/Card';
import { DialogTypes } from '@shared/constants';
import { FavoriteMovie, likeFilm, useIsFavorite } from '@entities/favorite';

interface HistoryCardProps {
  favoriteMovie: FavoriteMovie;
  prevCreated?: string;
}

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_NOW = dayjs().format(DATE_FORMAT);

const FavoriteCard: React.FC<HistoryCardProps> = ({
  favoriteMovie,
  prevCreated,
}) => {
  const isFavorite = useIsFavorite(favoriteMovie.kinopoiskId);
  const [, setSearchParams] = useSearchParams();

  const [date, prevDate] = useMemo(
    () => [
      dayjs(favoriteMovie.created).format(DATE_FORMAT),
      prevCreated ? dayjs(prevCreated).format(DATE_FORMAT) : null,
    ],
    [favoriteMovie.created, prevCreated]
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
        onClick={() =>
          setSearchParams({
            dialog: DialogTypes.PREVIEW,
            kinopoisk_id: favoriteMovie.kinopoiskId.toString(),
          })
        }
        onClickIcon={() => likeFilm(favoriteMovie.kinopoiskId)}
        isFavorite={isFavorite}
        title={'movie.nameRu'}
      />
    </>
  );
};

export default FavoriteCard;
