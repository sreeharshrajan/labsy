import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByRelationAggregateInput>;
export const CustomerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
