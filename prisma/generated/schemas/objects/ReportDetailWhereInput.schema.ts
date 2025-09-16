import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ReportScalarRelationFilterObjectSchema } from './ReportScalarRelationFilter.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportParameterScalarRelationFilterObjectSchema } from './ReportParameterScalarRelationFilter.schema';
import { ReportParameterWhereInputObjectSchema } from './ReportParameterWhereInput.schema';
import { ServiceNullableScalarRelationFilterObjectSchema } from './ServiceNullableScalarRelationFilter.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ReportTemplateNullableScalarRelationFilterObjectSchema } from './ReportTemplateNullableScalarRelationFilter.schema';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema';
import { DoctorCommissionLogListRelationFilterObjectSchema } from './DoctorCommissionLogListRelationFilter.schema'

const reportdetailwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportDetailWhereInputObjectSchema), z.lazy(() => ReportDetailWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportDetailWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportDetailWhereInputObjectSchema), z.lazy(() => ReportDetailWhereInputObjectSchema).array()]).optional(),
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
  reportTemplateId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  report: z.union([z.lazy(() => ReportScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  parameter: z.union([z.lazy(() => ReportParameterScalarRelationFilterObjectSchema), z.lazy(() => ReportParameterWhereInputObjectSchema)]).optional(),
  Service: z.union([z.lazy(() => ServiceNullableScalarRelationFilterObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  ReportTemplate: z.union([z.lazy(() => ReportTemplateNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportTemplateWhereInputObjectSchema)]).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogListRelationFilterObjectSchema).optional()
}).strict();
export const ReportDetailWhereInputObjectSchema: z.ZodType<Prisma.ReportDetailWhereInput> = reportdetailwhereinputSchema as unknown as z.ZodType<Prisma.ReportDetailWhereInput>;
export const ReportDetailWhereInputObjectZodSchema = reportdetailwhereinputSchema;
