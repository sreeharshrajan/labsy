import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const doctorcommissionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commissionType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorCommissionScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorCommissionScalarWhereInput> = doctorcommissionscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionScalarWhereInput>;
export const DoctorCommissionScalarWhereInputObjectZodSchema = doctorcommissionscalarwhereinputSchema;
