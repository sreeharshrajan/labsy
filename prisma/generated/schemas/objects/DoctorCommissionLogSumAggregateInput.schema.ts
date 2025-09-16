import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commissionAmt: z.literal(true).optional()
}).strict();
export const DoctorCommissionLogSumAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogSumAggregateInputType>;
export const DoctorCommissionLogSumAggregateInputObjectZodSchema = makeSchema();
