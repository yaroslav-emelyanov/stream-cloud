import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import { useMediaQuery, useTheme } from '@mui/material';

import { KinopoiskSimilarMovie } from '@shared/types';

import SimilarCard from './SimilarCard';

interface CardSliderProps {
  list: KinopoiskSimilarMovie[];
}

const SimilarMovieSlider: React.FC<CardSliderProps> = ({ list }) => {
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Swiper spaceBetween={0.5} slidesPerView={smMatch ? 2 : 3}>
      {list.map((item) => (
        <SwiperSlide key={item.filmId}>
          <SimilarCard film={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarMovieSlider;
