import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import { KinopoiskSimilarFilm } from '@shared/types';

import SimilarCard from './SimilarCard';

interface CardSliderProps {
  list: KinopoiskSimilarFilm[];
}

const SimilarMovieSlider: React.FC<CardSliderProps> = ({ list }) => {
  return (
    <Swiper slidesPerView={6}>
      {list.map((item) => (
        <SwiperSlide key={item.filmId}>
          <SimilarCard film={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarMovieSlider;
