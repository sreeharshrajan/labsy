import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDoctorStatusWithAggregatesFilterObjectSchema } from './EnumDoctorStatusWithAggregatesFilter.schema';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const doctorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  specialization: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  registrationNo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  clinicName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  department: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDoctorStatusWithAggregatesFilterObjectSchema), DoctorStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DoctorScalarWhereWithAggregatesInput> = doctorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DoctorScalarWhereWithAggregatesInput>;
export const DoctorScalarWhereWithAggregatesInputObjectZodSchema = doctorscalarwherewithaggregatesinputSchema;
