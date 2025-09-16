import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  value: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionAvgOrderByAggregateInput>;
export const DoctorCommissionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
