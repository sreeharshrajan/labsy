import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateNestedOneWithoutDetailsInputObjectSchema } from './ReportCreateNestedOneWithoutDetailsInput.schema';
import { ReportParameterCreateNestedOneWithoutDetailsInputObjectSchema } from './ReportParameterCreateNestedOneWithoutDetailsInput.schema';
import { ServiceCreateNestedOneWithoutReportDetailInputObjectSchema } from './ServiceCreateNestedOneWithoutReportDetailInput.schema';
import { ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateNestedOneWithoutReportDetailsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  parameterName: z.string().optional().nullable(),
  parameterUnit: z.string().optional().nullable(),
  parameterReferenceMin: z.number().optional().nullable(),
  parameterReferenceMax: z.number().optional().nullable(),
  resultText: z.string().optional().nullable(),
  resultValue: z.number().optional().nullable(),
  remarks: z.string().optional().nullable(),
  amount: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastEditedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  report: z.lazy(() => ReportCreateNestedOneWithoutDetailsInputObjectSchema),
  parameter: z.lazy(() => ReportParameterCreateNestedOneWithoutDetailsInputObjectSchema),
  Service: z.lazy(() => ServiceCreateNestedOneWithoutReportDetailInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectSchema).optional()
}).strict();
export const ReportDetailCreateWithoutDoctorCommissionLogInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateWithoutDoctorCommissionLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateWithoutDoctorCommissionLogInput>;
export const ReportDetailCreateWithoutDoctorCommissionLogInputObjectZodSchema = makeSchema();
