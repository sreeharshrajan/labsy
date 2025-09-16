import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const doctorcommissionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DoctorCommissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  commissionType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const DoctorCommissionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DoctorCommissionScalarWhereWithAggregatesInput> = doctorcommissionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionScalarWhereWithAggregatesInput>;
export const DoctorCommissionScalarWhereWithAggregatesInputObjectZodSchema = doctorcommissionscalarwherewithaggregatesinputSchema;
