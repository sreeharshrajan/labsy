import { z } from 'zod';

export const SyncStatusSchema = z.enum(['PENDING', 'SYNCED', 'FAILED', 'CONFLICT', 'RESOLVED', 'PROCESSING'])

export type SyncStatus = z.infer<typeof SyncStatusSchema>;