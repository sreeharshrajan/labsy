import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const reporttemplatescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportTemplateScalarWhereInputObjectSchema), z.lazy(() => ReportTemplateScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportTemplateScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportTemplateScalarWhereInputObjectSchema), z.lazy(() => ReportTemplateScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  unit: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reference: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReportTemplateScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportTemplateScalarWhereInput> = reporttemplatescalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportTemplateScalarWhereInput>;
export const ReportTemplateScalarWhereInputObjectZodSchema = reporttemplatescalarwhereinputSchema;
