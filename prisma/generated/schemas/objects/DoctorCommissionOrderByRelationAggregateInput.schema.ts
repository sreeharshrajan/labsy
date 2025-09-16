import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionOrderByRelationAggregateInput>;
export const DoctorCommissionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
