import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DoctorCreateNestedOneWithoutDoctorPaymentsInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorPaymentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number(),
  paymentDate: z.coerce.date().optional(),
  paymentMethod: PaymentMethodSchema,
  referenceNo: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorPaymentsInputObjectSchema)
}).strict();
export const DoctorCommissionPaymentCreateInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCreateInput>;
export const DoctorCommissionPaymentCreateInputObjectZodSchema = makeSchema();
