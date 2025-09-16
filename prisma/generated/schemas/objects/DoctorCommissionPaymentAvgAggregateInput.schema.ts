import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const DoctorCommissionPaymentAvgAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentAvgAggregateInputType>;
export const DoctorCommissionPaymentAvgAggregateInputObjectZodSchema = makeSchema();
