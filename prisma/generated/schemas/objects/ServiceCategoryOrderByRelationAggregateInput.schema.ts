import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ServiceCategoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryOrderByRelationAggregateInput>;
export const ServiceCategoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
