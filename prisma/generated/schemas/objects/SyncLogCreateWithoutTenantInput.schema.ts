import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { SyncOperationSchema } from '../enums/SyncOperation.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  entity: z.string(),
  entityId: z.string(),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: SyncStatusSchema.optional(),
  operation: SyncOperationSchema.optional(),
  syncedAt: z.coerce.date().optional(),
  startedAt: z.coerce.date().optional()
}).strict();
export const SyncLogCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogCreateWithoutTenantInput>;
export const SyncLogCreateWithoutTenantInputObjectZodSchema = makeSchema();
