import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DialogTypes } from './constants';

export const useDialogState = (key: string, delay: number) => {
  const [dialogKey, setDialogKey] = useState('');
  const [search, setSearch] = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const param = search.get(key) || '';

  useEffect(() => {
    if (param) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setDialogKey(param);
    } else {
      timeoutRef.current = setTimeout(() => setDialogKey(param), delay);
    }
  }, [param, delay]);

  return {
    isOpen: Boolean(param),
    key: dialogKey || '',
    onClose: () => setSearch({}),
  };
};

export const useNav = () => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return useMemo(
    () => ({
      to: {
        film: (kinopoiskId?: string | number | null) =>
          navigate(`/film/${kinopoiskId}`),
      },
      back: () => navigate(-1),
      open: {
        login: () => setSearchParams({ dialog: DialogTypes.LOGIN }),
        registeration: () =>
          setSearchParams({ dialog: DialogTypes.REGISTERATION }),
      },
      close: () => setSearchParams({}),
    }),
    [navigate, setSearchParams]
  );
};
