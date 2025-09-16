import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const reportdetailscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportDetailScalarWhereInputObjectSchema), z.lazy(() => ReportDetailScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parameterName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  parameterUnit: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  parameterReferenceMin: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  parameterReferenceMax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  resultText: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  resultValue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  lastEditedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  reportId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parameterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reportTemplateId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ReportDetailScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportDetailScalarWhereInput> = reportdetailscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportDetailScalarWhereInput>;
export const ReportDetailScalarWhereInputObjectZodSchema = reportdetailscalarwhereinputSchema;
