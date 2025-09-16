import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  commissionAmt: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogSumOrderByAggregateInput>;
export const DoctorCommissionLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
