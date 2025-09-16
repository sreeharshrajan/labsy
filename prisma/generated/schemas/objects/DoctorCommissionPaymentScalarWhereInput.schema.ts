import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumPaymentMethodFilterObjectSchema } from './EnumPaymentMethodFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const doctorcommissionpaymentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  paymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  paymentMethod: z.union([z.lazy(() => EnumPaymentMethodFilterObjectSchema), PaymentMethodSchema]).optional(),
  referenceNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorCommissionPaymentScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentScalarWhereInput> = doctorcommissionpaymentscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionPaymentScalarWhereInput>;
export const DoctorCommissionPaymentScalarWhereInputObjectZodSchema = doctorcommissionpaymentscalarwhereinputSchema;
