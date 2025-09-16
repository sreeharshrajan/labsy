import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { EnumDoctorCommissionStatusWithAggregatesFilterObjectSchema } from './EnumDoctorCommissionStatusWithAggregatesFilter.schema';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const doctorcommissionlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  invoiceId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  commissionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reportDetailId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  commissionAmt: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  commissionStatus: z.union([z.lazy(() => EnumDoctorCommissionStatusWithAggregatesFilterObjectSchema), DoctorCommissionStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DoctorCommissionLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogScalarWhereWithAggregatesInput> = doctorcommissionlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionLogScalarWhereWithAggregatesInput>;
export const DoctorCommissionLogScalarWhereWithAggregatesInputObjectZodSchema = doctorcommissionlogscalarwherewithaggregatesinputSchema;
