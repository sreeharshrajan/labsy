import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number(),
  paymentDate: z.coerce.date().optional(),
  paymentMethod: PaymentMethodSchema,
  referenceNo: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctorId: z.string()
}).strict();
export const DoctorCommissionPaymentCreateManyInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCreateManyInput>;
export const DoctorCommissionPaymentCreateManyInputObjectZodSchema = makeSchema();
