import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import { FilmOrders, setOrder, useOrder } from '@entities/film';

const OrderSelect = () => {
  const order = useOrder();

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="order-label">Сортировка</InputLabel>
      <Select
        input={<OutlinedInput label="Сортировка" />}
        labelId="order-label"
        value={order}
        onChange={(e) => setOrder(e.target.value as FilmOrders)}
      >
        <MenuItem value={FilmOrders.RATING}> Рейтинг</MenuItem>
        <MenuItem value={FilmOrders.YEAR}>Год</MenuItem>
        <MenuItem value={FilmOrders.NUM_VOTE}>Количество голосов</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderSelect;
