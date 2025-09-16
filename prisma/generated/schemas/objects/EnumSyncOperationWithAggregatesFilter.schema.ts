import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { NestedEnumSyncOperationWithAggregatesFilterObjectSchema } from './NestedEnumSyncOperationWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSyncOperationFilterObjectSchema } from './NestedEnumSyncOperationFilter.schema'

const makeSchema = () => z.object({
  equals: SyncOperationSchema.optional(),
  in: SyncOperationSchema.array().optional(),
  notIn: SyncOperationSchema.array().optional(),
  not: z.union([SyncOperationSchema, z.lazy(() => NestedEnumSyncOperationWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSyncOperationFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSyncOperationFilterObjectSchema).optional()
}).strict();
export const EnumSyncOperationWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSyncOperationWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncOperationWithAggregatesFilter>;
export const EnumSyncOperationWithAggregatesFilterObjectZodSchema = makeSchema();
