import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncStatusSchema } from '../enums/SyncStatus.schema'

const nestedenumsyncstatusfilterSchema = z.object({
  equals: SyncStatusSchema.optional(),
  in: SyncStatusSchema.array().optional(),
  notIn: SyncStatusSchema.array().optional(),
  not: z.union([SyncStatusSchema, z.lazy(() => NestedEnumSyncStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSyncStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumSyncStatusFilter> = nestedenumsyncstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSyncStatusFilter>;
export const NestedEnumSyncStatusFilterObjectZodSchema = nestedenumsyncstatusfilterSchema;
