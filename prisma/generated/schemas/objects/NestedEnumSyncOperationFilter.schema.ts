import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncOperationSchema } from '../enums/SyncOperation.schema'

const nestedenumsyncoperationfilterSchema = z.object({
  equals: SyncOperationSchema.optional(),
  in: SyncOperationSchema.array().optional(),
  notIn: SyncOperationSchema.array().optional(),
  not: z.union([SyncOperationSchema, z.lazy(() => NestedEnumSyncOperationFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSyncOperationFilterObjectSchema: z.ZodType<Prisma.NestedEnumSyncOperationFilter> = nestedenumsyncoperationfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSyncOperationFilter>;
export const NestedEnumSyncOperationFilterObjectZodSchema = nestedenumsyncoperationfilterSchema;
