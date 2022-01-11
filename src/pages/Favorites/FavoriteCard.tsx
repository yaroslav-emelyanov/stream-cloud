import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

import Card from '@components/Card';
import { DialogTypes } from '@shared/constants';
import {
  Favorite,
  likeFilm,
  useFavoriteMovie,
  useIsFavorite,
} from '@entities/favorite';

interface HistoryCardProps {
  favorite: Favorite;
  prevCreated?: string;
}

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_NOW = dayjs().format(DATE_FORMAT);

const FavoriteCard: React.FC<HistoryCardProps> = ({
  favorite,
  prevCreated,
}) => {
  const favoriteMovie = useFavoriteMovie(favorite.kinopoiskId);
  const isFavorite = useIsFavorite(favorite.kinopoiskId);
  const [, setSearchParams] = useSearchParams();

  const [date, prevDate] = useMemo(
    () => [
      dayjs(favorite.created).format(DATE_FORMAT),
      prevCreated ? dayjs(prevCreated).format(DATE_FORMAT) : null,
    ],
    [favorite.created, prevCreated]
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
            kinopoisk_id: favorite.kinopoiskId.toString(),
          })
        }
        rating={favoriteMovie?.ratingKinopoisk?.toString()}
        description={
          <>
            <div>
              {[favoriteMovie?.year, favoriteMovie?.genres[0]?.genre]
                .filter(Boolean)
                .join(', ')}
            </div>
            <div>{favoriteMovie?.countries[0]?.country}</div>
          </>
        }
        onClickIcon={() => likeFilm(favorite.kinopoiskId)}
        isFavorite={isFavorite}
        posterUrl={favoriteMovie?.posterUrlPreview}
        title={favoriteMovie?.nameRu || ''}
        loading={!favoriteMovie}
      />
    </>
  );
};

export default FavoriteCard;
