import { createEvent, restore } from 'effector';

export const createFilters = () => {
  const reset = createEvent();

  const setQuery = createEvent<string>();
  const $query = restore(setQuery, '').reset(reset);

  const setYear = createEvent<Date | null>();
  const $year = restore(setYear, null).reset(reset);

  return {
    setQuery,
    $query,
    setYear,
    $year,
    reset,
  };
};
