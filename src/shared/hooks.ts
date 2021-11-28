import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useDialogState = (key: string, delay: number) => {
  const [dialogKey, setDialogKey] = useState<string | null>('');
  const [search, setSearch] = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const param = search.get(key);

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
    key: dialogKey,
    onClose: () => setSearch({ [key]: '' }),
  };
};
