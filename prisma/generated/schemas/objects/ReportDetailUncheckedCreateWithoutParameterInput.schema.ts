import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInput.schema'

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
  reportId: z.string(),
  serviceId: z.string().optional().nullable(),
  reportTemplateId: z.string().optional().nullable(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogUncheckedCreateNestedManyWithoutReportDetailInputObjectSchema).optional()
}).strict();
export const ReportDetailUncheckedCreateWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedCreateWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedCreateWithoutParameterInput>;
export const ReportDetailUncheckedCreateWithoutParameterInputObjectZodSchema = makeSchema();
