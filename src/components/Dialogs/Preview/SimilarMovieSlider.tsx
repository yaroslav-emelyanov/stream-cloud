import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import { useMediaQuery, useTheme } from '@mui/material';

import Card from '@components/Card';
import { KinopoiskSimilarMovie } from '@shared/types';
import { DialogTypes } from '@shared/constants';

interface CardSliderProps {
  list: KinopoiskSimilarMovie[];
}

const SimilarMovieSlider: React.FC<CardSliderProps> = ({ list }) => {
  const [, setSearchParams] = useSearchParams();

  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Swiper spaceBetween={0.5} slidesPerView={smMatch ? 2 : 3}>
      {list.map((item) => (
        <SwiperSlide key={item.filmId}>
          <Card
            onClick={() =>
              setSearchParams({
                dialog: DialogTypes.PREVIEW,
                kinopoisk_id: item.filmId.toString(),
              })
            }
            title={item.nameRu}
            posterUrl={item.posterUrlPreview}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarMovieSlider;
