import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDoctorStatusFilterObjectSchema } from './EnumDoctorStatusFilter.schema';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const doctorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  specialization: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  registrationNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  clinicName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDoctorStatusFilterObjectSchema), DoctorStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorScalarWhereInput> = doctorscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorScalarWhereInput>;
export const DoctorScalarWhereInputObjectZodSchema = doctorscalarwhereinputSchema;
