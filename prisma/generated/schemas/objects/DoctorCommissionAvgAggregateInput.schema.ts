import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  value: z.literal(true).optional()
}).strict();
export const DoctorCommissionAvgAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionAvgAggregateInputType>;
export const DoctorCommissionAvgAggregateInputObjectZodSchema = makeSchema();
