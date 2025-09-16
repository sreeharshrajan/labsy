import { z } from 'zod';

import { SyncStatusSchema } from '../../enums/SyncStatus.schema';
import { SyncOperationSchema } from '../../enums/SyncOperation.schema';
// prettier-ignore
export const SyncLogInputSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    entity: z.string(),
    entityId: z.string(),
    details: z.unknown().optional().nullable(),
    status: SyncStatusSchema,
    operation: SyncOperationSchema,
    syncedAt: z.date(),
    startedAt: z.date(),
    tenant: z.unknown()
}).strict();

export type SyncLogInputType = z.infer<typeof SyncLogInputSchema>;
