import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncStatusSchema } from '../enums/SyncStatus.schema';
import { NestedEnumSyncStatusFilterObjectSchema } from './NestedEnumSyncStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SyncStatusSchema.optional(),
  in: SyncStatusSchema.array().optional(),
  notIn: SyncStatusSchema.array().optional(),
  not: z.union([SyncStatusSchema, z.lazy(() => NestedEnumSyncStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumSyncStatusFilterObjectSchema: z.ZodType<Prisma.EnumSyncStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSyncStatusFilter>;
export const EnumSyncStatusFilterObjectZodSchema = makeSchema();
