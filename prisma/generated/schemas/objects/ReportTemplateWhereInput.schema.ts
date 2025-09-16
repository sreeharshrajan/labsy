import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ServiceScalarRelationFilterObjectSchema } from './ServiceScalarRelationFilter.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ReportDetailListRelationFilterObjectSchema } from './ReportDetailListRelationFilter.schema';
import { ReportParameterListRelationFilterObjectSchema } from './ReportParameterListRelationFilter.schema'

const reporttemplatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportTemplateWhereInputObjectSchema), z.lazy(() => ReportTemplateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportTemplateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportTemplateWhereInputObjectSchema), z.lazy(() => ReportTemplateWhereInputObjectSchema).array()]).optional(),
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
  serviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  service: z.union([z.lazy(() => ServiceScalarRelationFilterObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  ReportDetails: z.lazy(() => ReportDetailListRelationFilterObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterListRelationFilterObjectSchema).optional()
}).strict();
export const ReportTemplateWhereInputObjectSchema: z.ZodType<Prisma.ReportTemplateWhereInput> = reporttemplatewhereinputSchema as unknown as z.ZodType<Prisma.ReportTemplateWhereInput>;
export const ReportTemplateWhereInputObjectZodSchema = reporttemplatewhereinputSchema;
