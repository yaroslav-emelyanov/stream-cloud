import { useGate } from 'effector-react';

import { Dialog } from './watch';

export const useDialogGate = (id: string | null) => useGate(Dialog, id);
