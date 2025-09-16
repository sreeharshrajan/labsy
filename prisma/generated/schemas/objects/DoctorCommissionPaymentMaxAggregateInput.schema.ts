import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  paymentDate: z.literal(true).optional(),
  paymentMethod: z.literal(true).optional(),
  referenceNo: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  doctorId: z.literal(true).optional()
}).strict();
export const DoctorCommissionPaymentMaxAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentMaxAggregateInputType>;
export const DoctorCommissionPaymentMaxAggregateInputObjectZodSchema = makeSchema();
