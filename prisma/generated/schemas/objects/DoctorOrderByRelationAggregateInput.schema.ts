import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DoctorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DoctorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorOrderByRelationAggregateInput>;
export const DoctorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
