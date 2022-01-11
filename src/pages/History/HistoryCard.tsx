import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import Card from '@components/Card';
import { DialogTypes } from '@shared/constants';
import { HistoryMovie } from '@entities/history';
import { likeFilm, useIsFavorite } from '@entities/favorite';

interface HistoryCardProps {
  movie: HistoryMovie;
  prevHistoryDate?: string;
}

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_NOW = dayjs().format(DATE_FORMAT);

const HistoryCard: React.FC<HistoryCardProps> = ({
  movie,
  prevHistoryDate,
}) => {
  const isFavorite = useIsFavorite(movie.kinopoiskId.toString());
  const [, setSearchParams] = useSearchParams();

  const [date, prevDate] = useMemo(
    () => [
      dayjs(movie.added_to_history).format(DATE_FORMAT),
      prevHistoryDate ? dayjs(prevHistoryDate).format(DATE_FORMAT) : null,
    ],
    [movie.added_to_history, prevHistoryDate]
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
            kinopoisk_id: movie.kinopoiskId.toString(),
          })
        }
        onClickIcon={() => likeFilm(movie.kinopoiskId.toString())}
        rating={movie.ratingKinopoisk?.toString()}
        description={
          <>
            <div>
              {[movie.year, movie.genres[0]?.genre].filter(Boolean).join(', ')}
            </div>
            <div>{movie.countries[0]?.country}</div>
          </>
        }
        isFavorite={isFavorite}
        posterUrl={movie.posterUrlPreview}
        title={movie.nameRu}
      />
    </>
  );
};

export default HistoryCard;
