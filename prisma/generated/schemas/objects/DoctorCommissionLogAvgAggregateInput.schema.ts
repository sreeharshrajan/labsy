import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  commissionAmt: z.literal(true).optional()
}).strict();
export const DoctorCommissionLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogAvgAggregateInputType>;
export const DoctorCommissionLogAvgAggregateInputObjectZodSchema = makeSchema();
