import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema } from './ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInput.schema';
import { ReportParameterUncheckedCreateNestedManyWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedCreateNestedManyWithoutTemplateInput.schema'

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
  serviceId: z.string(),
  ReportDetails: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterUncheckedCreateNestedManyWithoutTemplateInputObjectSchema).optional()
}).strict();
export const ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedCreateWithoutTenantInput>;
export const ReportTemplateUncheckedCreateWithoutTenantInputObjectZodSchema = makeSchema();
