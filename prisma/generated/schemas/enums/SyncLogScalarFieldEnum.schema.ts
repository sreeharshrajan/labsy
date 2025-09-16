import { z } from 'zod';

export const SyncLogScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'entity', 'entityId', 'details', 'status', 'operation', 'syncedAt', 'startedAt'])

export type SyncLogScalarFieldEnum = z.infer<typeof SyncLogScalarFieldEnumSchema>;