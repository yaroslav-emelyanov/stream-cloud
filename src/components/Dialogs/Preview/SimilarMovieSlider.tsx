import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import Card from '@components/Card';
import { KinopoiskSimilarMovie } from '@shared/types';
import { DialogTypes } from '@shared/constants';

interface CardSliderProps {
  list: KinopoiskSimilarMovie[];
}

const SimilarMovieSlider: React.FC<CardSliderProps> = ({ list }) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <Swiper spaceBetween={1} slidesPerView={3}>
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
