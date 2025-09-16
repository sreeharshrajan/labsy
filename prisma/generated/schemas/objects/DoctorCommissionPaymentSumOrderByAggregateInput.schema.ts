import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionPaymentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentSumOrderByAggregateInput>;
export const DoctorCommissionPaymentSumOrderByAggregateInputObjectZodSchema = makeSchema();
