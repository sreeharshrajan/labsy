import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSyncStatusFilterObjectSchema } from './NestedEnumSyncStatusFilter.schema'

const nestedenumsyncstatuswithaggregatesfilterSchema = z.object({
  equals: SyncStatusSchema.optional(),
  in: SyncStatusSchema.array().optional(),
  notIn: SyncStatusSchema.array().optional(),
  not: z.union([SyncStatusSchema, z.lazy(() => NestedEnumSyncStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSyncStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSyncStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumSyncStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSyncStatusWithAggregatesFilter> = nestedenumsyncstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSyncStatusWithAggregatesFilter>;
export const NestedEnumSyncStatusWithAggregatesFilterObjectZodSchema = nestedenumsyncstatuswithaggregatesfilterSchema;
