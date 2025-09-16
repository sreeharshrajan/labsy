import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const reportparameterscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportParameterScalarWhereInputObjectSchema), z.lazy(() => ReportParameterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportParameterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportParameterScalarWhereInputObjectSchema), z.lazy(() => ReportParameterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  unit: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  method: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  turnaroundTime: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isCritical: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  criticalLow: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  criticalHigh: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  genderSpecific: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  ageSpecific: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  referenceMin: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  referenceMax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  ageMin: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ageMax: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  templateId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReportParameterScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportParameterScalarWhereInput> = reportparameterscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportParameterScalarWhereInput>;
export const ReportParameterScalarWhereInputObjectZodSchema = reportparameterscalarwhereinputSchema;
