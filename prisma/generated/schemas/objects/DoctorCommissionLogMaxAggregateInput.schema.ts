import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  invoiceId: z.literal(true).optional(),
  commissionId: z.literal(true).optional(),
  reportDetailId: z.literal(true).optional(),
  commissionAmt: z.literal(true).optional(),
  commissionStatus: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DoctorCommissionLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogMaxAggregateInputType>;
export const DoctorCommissionLogMaxAggregateInputObjectZodSchema = makeSchema();
