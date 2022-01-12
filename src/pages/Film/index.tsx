import React from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer, Media } from './styles';
import { useFilmPageGate } from './model';

import Header from './Header';
import FilmVideo from './FilmVideo';
import FilmPoster from './FilmPoster';
import FilmTrailer from './FilmTrailer';
import SimilarFilms from './SimilarFilms';
import FilmInformation from './FilmInformation';

const FilmPage = () => {
  const params = useParams<'kinopoiskId'>();

  useFilmPageGate(params);

  return (
    <PageContainer>
      <Header />
      <Media>
        <FilmPoster width={345} height={500} />
        <FilmTrailer height={500} />
      </Media>
      <FilmInformation />
      <FilmVideo height={500} />
      <SimilarFilms />
    </PageContainer>
  );
};

export default FilmPage;
