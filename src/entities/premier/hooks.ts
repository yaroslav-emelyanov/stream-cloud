import { useStore } from 'effector-react';
import { $premieres } from './premiers';

export const usePremiers = () => useStore($premieres);
