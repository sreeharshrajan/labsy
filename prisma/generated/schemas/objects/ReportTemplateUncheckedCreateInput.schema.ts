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
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  serviceId: z.string(),
  ReportDetails: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutReportTemplateInputObjectSchema),
  ReportParameter: z.lazy(() => ReportParameterUncheckedCreateNestedManyWithoutTemplateInputObjectSchema)
}).strict();
export const ReportTemplateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedCreateInput>;
export const ReportTemplateUncheckedCreateInputObjectZodSchema = makeSchema();
