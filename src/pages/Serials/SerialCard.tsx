import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ContentTypes, DialogTypes } from '@shared/constants';
import { Serial, useKinopoiskSerial } from '@entities/serial';

import Card from '@components/Card';

interface MovieCardProps {
  serial: Serial;
}

const SerialCard: React.FC<MovieCardProps> = ({ serial }) => {
  const kinopoiskSerial = useKinopoiskSerial(serial.kinopoisk_id);
  const [, setSearchParams] = useSearchParams();

  const genre = kinopoiskSerial?.info?.genres[0]?.genre;

  const description = useMemo(
    () =>
      [new Date(serial.start_date).getFullYear(), genre]
        .filter(Boolean)
        .join(', '),
    [serial.start_date, genre]
  );

  return (
    <Card
      onClick={() =>
        setSearchParams({
          type: ContentTypes.SERIAL,
          dialog: DialogTypes.PREVIEW,
          kinopoisk_id: serial.kinopoisk_id,
        })
      }
      title={serial.ru_title}
      description={description}
      loading={kinopoiskSerial?.loading}
      posterUrl={kinopoiskSerial?.info?.posterUrlPreview}
    />
  );
};

export default SerialCard;
