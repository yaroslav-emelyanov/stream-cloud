import React from 'react';

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Slider,
} from '@mui/material';

import {
  useGenres,
  selectGenres,
  useOrder,
  setOrder,
  FilmOrders,
  useRating,
  setRating,
  useType,
  FilmTypes,
  setType,
  useCountries,
  selectCountries,
  resetFilters,
  useYear,
  setYear,
} from '@entities/film';

const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 1888;

const Filters = () => {
  const { countries, selectedCountries } = useCountries();
  const { genres, selectedGenres } = useGenres();
  const rating = useRating();
  const order = useOrder();
  const type = useType();
  const year = useYear();

  const handleChangeGenres = (
    event: SelectChangeEvent<typeof selectedGenres>
  ) => {
    const value = event.target.value as typeof selectedGenres;

    selectGenres(value);
  };

  const handleChangeCountries = (
    event: SelectChangeEvent<typeof selectedCountries>
  ) => {
    const value = event.target.value as typeof selectedCountries;

    selectCountries(value);
  };

  const handleChangeType = (event: SelectChangeEvent<typeof type>) => {
    const value = event.target.value as typeof type;

    setType(value);
  };

  const handleChangeOrder = (event: SelectChangeEvent<typeof order>) => {
    const value = event.target.value as typeof order;

    setOrder(value);
  };

  const handleChangeRating = (event: Event, newValue: number | number[]) => {
    const value = newValue as typeof rating;

    setRating(value);
  };

  const handleChangeYear = (event: Event, newValue: number | number[]) => {
    const value = newValue as typeof year;

    setYear(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <FormControl sx={{ flex: 1 }} size="small">
        <InputLabel id="genres-label">Жанр</InputLabel>
        <Select
          labelId="genres-label"
          value={selectedGenres}
          multiple
          onChange={handleChangeGenres}
          input={<OutlinedInput label="Жанр" />}
        >
          {genres.map((genre) => (
            <MenuItem value={genre.id} key={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Slider
        value={year}
        min={MIN_YEAR}
        max={MAX_YEAR}
        onChange={handleChangeYear}
        valueLabelDisplay="auto"
        style={{ width: 100 }}
        disableSwap
      />
      <FormControl sx={{ flex: 1 }} size="small">
        <InputLabel id="genres-label">Страны</InputLabel>
        <Select
          labelId="genres-label"
          value={selectedCountries}
          multiple
          onChange={handleChangeCountries}
          input={<OutlinedInput label="Страны" />}
        >
          {countries.map((country) => (
            <MenuItem value={country.id} key={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Slider
        value={rating}
        step={1}
        max={10}
        onChange={handleChangeRating}
        valueLabelDisplay="auto"
        style={{ width: 100 }}
        disableSwap
      />
      <FormControl sx={{ flex: 1 }} size="small">
        <InputLabel id="order-label">Сортировка</InputLabel>
        <Select
          input={<OutlinedInput label="Сортировка" />}
          labelId="order-label"
          value={order}
          onChange={handleChangeOrder}
        >
          <MenuItem value={FilmOrders.RATING}> Рейтинг</MenuItem>
          <MenuItem value={FilmOrders.YEAR}>Год</MenuItem>
          <MenuItem value={FilmOrders.NUM_VOTE}>Количество голосов</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ flex: 1 }} size="small">
        <InputLabel id="type-label">Тип</InputLabel>
        <Select
          input={<OutlinedInput label="Тип" />}
          labelId="type-label"
          value={type}
          onChange={handleChangeType}
        >
          <MenuItem value={FilmTypes.ALL}>Все</MenuItem>
          <MenuItem value={FilmTypes.FILM}>Фильмы</MenuItem>
          <MenuItem value={FilmTypes.TV_SHOW}>Сериалы</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={() => resetFilters()} variant="contained">
        Сброс
      </Button>
    </div>
  );
};

export default Filters;
