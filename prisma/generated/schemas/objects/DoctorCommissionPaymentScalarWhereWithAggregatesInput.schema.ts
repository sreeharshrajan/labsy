import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumPaymentMethodWithAggregatesFilterObjectSchema } from './EnumPaymentMethodWithAggregatesFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPaymentStatusWithAggregatesFilterObjectSchema } from './EnumPaymentStatusWithAggregatesFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const doctorcommissionpaymentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  paymentDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  paymentMethod: z.union([z.lazy(() => EnumPaymentMethodWithAggregatesFilterObjectSchema), PaymentMethodSchema]).optional(),
  referenceNo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumPaymentStatusWithAggregatesFilterObjectSchema), PaymentStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentScalarWhereWithAggregatesInput> = doctorcommissionpaymentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionPaymentScalarWhereWithAggregatesInput>;
export const DoctorCommissionPaymentScalarWhereWithAggregatesInputObjectZodSchema = doctorcommissionpaymentscalarwherewithaggregatesinputSchema;
