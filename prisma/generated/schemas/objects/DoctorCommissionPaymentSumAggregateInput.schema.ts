import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const DoctorCommissionPaymentSumAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentSumAggregateInputType>;
export const DoctorCommissionPaymentSumAggregateInputObjectZodSchema = makeSchema();
