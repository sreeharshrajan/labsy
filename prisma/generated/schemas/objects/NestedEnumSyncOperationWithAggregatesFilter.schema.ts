import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSyncOperationFilterObjectSchema } from './NestedEnumSyncOperationFilter.schema'

const nestedenumsyncoperationwithaggregatesfilterSchema = z.object({
  equals: SyncOperationSchema.optional(),
  in: SyncOperationSchema.array().optional(),
  notIn: SyncOperationSchema.array().optional(),
  not: z.union([SyncOperationSchema, z.lazy(() => NestedEnumSyncOperationWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSyncOperationFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSyncOperationFilterObjectSchema).optional()
}).strict();
export const NestedEnumSyncOperationWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSyncOperationWithAggregatesFilter> = nestedenumsyncoperationwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSyncOperationWithAggregatesFilter>;
export const NestedEnumSyncOperationWithAggregatesFilterObjectZodSchema = nestedenumsyncoperationwithaggregatesfilterSchema;
