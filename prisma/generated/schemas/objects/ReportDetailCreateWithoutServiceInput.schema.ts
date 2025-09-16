import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateNestedOneWithoutDetailsInputObjectSchema } from './ReportCreateNestedOneWithoutDetailsInput.schema';
import { ReportParameterCreateNestedOneWithoutDetailsInputObjectSchema } from './ReportParameterCreateNestedOneWithoutDetailsInput.schema';
import { ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectSchema } from './ReportTemplateCreateNestedOneWithoutReportDetailsInput.schema';
import { DoctorCommissionLogCreateNestedManyWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogCreateNestedManyWithoutReportDetailInput.schema'

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
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedOneWithoutReportDetailsInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogCreateNestedManyWithoutReportDetailInputObjectSchema).optional()
}).strict();
export const ReportDetailCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateWithoutServiceInput>;
export const ReportDetailCreateWithoutServiceInputObjectZodSchema = makeSchema();
