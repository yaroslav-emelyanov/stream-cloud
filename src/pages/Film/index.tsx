import React from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { parseIdYouTubeUrl } from '@shared/utils';
import {
  useFilm,
  useFilmLoading,
  useFilmTrailer,
  useIframeSrc,
  useSimilarFilms,
} from '@entities/film';
import { useNav } from '@shared/hooks';
import { likeFilm, useIsFavorite } from '@entities/favorite';
import Poster from '@components/Poster';

import { useFilmPageGate } from './model';
import {
  PageContainer,
  Header,
  Information,
  SimilarContainer,
  SimilarList,
  Media,
} from './styles';
import SimilarCard from './SimilarCard';

const FilmPage = () => {
  const params = useParams<'kinopoiskId'>();

  const isFavorite = useIsFavorite(params?.kinopoiskId || '');
  const similarFilms = useSimilarFilms();
  const loading = useFilmLoading();
  const trailer = useFilmTrailer();
  const iframeSrc = useIframeSrc();
  const film = useFilm();
  const nav = useNav();

  useFilmPageGate(params);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <PageContainer>
      <Header>
        <IconButton onClick={nav.back}>
          <ArrowBackIcon />
        </IconButton>
        <div>
          <Typography variant="h5">
            <b>{film?.nameRu}</b>
          </Typography>
          <Typography variant="caption">{film?.nameOriginal}</Typography>
        </div>
      </Header>
      <Media>
        <Poster
          height={500}
          width={333.5}
          src={film?.posterUrl}
          rating={film?.ratingKinopoisk}
          onChangeFavorite={() => likeFilm(film?.kinopoiskId?.toString() || '')}
          isFavorite={isFavorite}
        />
        <iframe
          style={{ flex: 1 }}
          height={500}
          src={`https://www.youtube.com/embed/${parseIdYouTubeUrl(
            trailer?.url
          )}`}
          title={film?.nameRu}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Media>
      <Information>
        <div>
          <b>Год:</b> {film?.year}
        </div>
        <div>
          <b>Страна:</b>{' '}
          {film?.countries.map(({ country }) => country).join(', ')}
        </div>
        <div>
          <b>Жанр:</b> {film?.genres.map(({ genre }) => genre).join(', ')}
        </div>
        <div style={{ marginTop: 16 }}>
          <b>Описание:</b> {film?.description}
        </div>
      </Information>
      <div>
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            title={film?.nameRu}
            width="100%"
            style={{ height: 500 }}
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>
      <SimilarContainer>
        <Typography variant="h6" style={{ marginBottom: 16 }}>
          Похожие
        </Typography>
        <SimilarList>
          {similarFilms.map((film) => (
            <SimilarCard film={film} key={film.filmId} />
          ))}
        </SimilarList>
      </SimilarContainer>
    </PageContainer>
  );
};

export default FilmPage;
