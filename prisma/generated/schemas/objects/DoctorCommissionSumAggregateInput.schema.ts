import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  value: z.literal(true).optional()
}).strict();
export const DoctorCommissionSumAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionSumAggregateInputType>;
export const DoctorCommissionSumAggregateInputObjectZodSchema = makeSchema();
