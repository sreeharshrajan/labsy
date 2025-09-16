import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { NestedEnumSyncStatusWithAggregatesFilterObjectSchema } from './NestedEnumSyncStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSyncStatusFilterObjectSchema } from './NestedEnumSyncStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SyncStatusSchema.optional(),
  in: SyncStatusSchema.array().optional(),
  notIn: SyncStatusSchema.array().optional(),
  not: z.union([SyncStatusSchema, z.lazy(() => NestedEnumSyncStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSyncStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSyncStatusFilterObjectSchema).optional()
}).strict();
export const EnumSyncStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSyncStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncStatusWithAggregatesFilter>;
export const EnumSyncStatusWithAggregatesFilterObjectZodSchema = makeSchema();
