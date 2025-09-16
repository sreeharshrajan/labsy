import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  paymentDate: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  referenceNo: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionPaymentSelectObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentSelect>;
export const DoctorCommissionPaymentSelectObjectZodSchema = makeSchema();
