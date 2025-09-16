import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  unit: z.string().optional().nullable(),
  reference: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  serviceId: z.string(),
  ReportDetails: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema).optional()
}).strict();
export const ReportTemplateUncheckedCreateWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedCreateWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedCreateWithoutReportParameterInput>;
export const ReportTemplateUncheckedCreateWithoutReportParameterInputObjectZodSchema = makeSchema();
