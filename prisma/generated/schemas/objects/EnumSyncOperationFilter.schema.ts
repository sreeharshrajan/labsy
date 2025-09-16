import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncOperationSchema } from '../enums/SyncOperation.schema';
import { NestedEnumSyncOperationFilterObjectSchema } from './NestedEnumSyncOperationFilter.schema'

const makeSchema = () => z.object({
  equals: SyncOperationSchema.optional(),
  in: SyncOperationSchema.array().optional(),
  notIn: SyncOperationSchema.array().optional(),
  not: z.union([SyncOperationSchema, z.lazy(() => NestedEnumSyncOperationFilterObjectSchema)]).optional()
}).strict();
export const EnumSyncOperationFilterObjectSchema: z.ZodType<Prisma.EnumSyncOperationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncOperationFilter>;
export const EnumSyncOperationFilterObjectZodSchema = makeSchema();
