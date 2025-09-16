import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SyncLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SyncLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogOrderByRelationAggregateInput>;
export const SyncLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
