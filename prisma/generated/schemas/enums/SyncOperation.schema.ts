import { z } from 'zod';

export const SyncOperationSchema = z.enum(['CREATE', 'UPDATE', 'DELETE'])

export type SyncOperation = z.infer<typeof SyncOperationSchema>;