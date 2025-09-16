import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumDoctorCommissionStatusFilterObjectSchema } from './EnumDoctorCommissionStatusFilter.schema';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const doctorcommissionlogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invoiceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportDetailId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commissionAmt: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  commissionStatus: z.union([z.lazy(() => EnumDoctorCommissionStatusFilterObjectSchema), DoctorCommissionStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DoctorCommissionLogScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogScalarWhereInput> = doctorcommissionlogscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionLogScalarWhereInput>;
export const DoctorCommissionLogScalarWhereInputObjectZodSchema = doctorcommissionlogscalarwhereinputSchema;
