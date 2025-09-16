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
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const doctorcommissionpaymentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereInputObjectSchema).array()]).optional(),
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
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional()
}).strict();
export const DoctorCommissionPaymentWhereInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentWhereInput> = doctorcommissionpaymentwhereinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionPaymentWhereInput>;
export const DoctorCommissionPaymentWhereInputObjectZodSchema = doctorcommissionpaymentwhereinputSchema;
