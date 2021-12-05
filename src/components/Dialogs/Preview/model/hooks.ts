import { useGate } from 'effector-react';

import { Dialog } from './preview';

export const useDialogGate = (id: string | null) => useGate(Dialog, id);
