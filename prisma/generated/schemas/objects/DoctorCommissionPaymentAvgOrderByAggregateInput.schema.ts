import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const DoctorCommissionPaymentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentAvgOrderByAggregateInput>;
export const DoctorCommissionPaymentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
