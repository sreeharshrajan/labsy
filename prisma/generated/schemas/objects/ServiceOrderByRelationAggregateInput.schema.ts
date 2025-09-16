import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ServiceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServiceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceOrderByRelationAggregateInput>;
export const ServiceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
