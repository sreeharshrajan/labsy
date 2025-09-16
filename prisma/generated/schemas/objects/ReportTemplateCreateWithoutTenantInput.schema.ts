import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateNestedOneWithoutReportTemplateInputObjectSchema } from './ServiceCreateNestedOneWithoutReportTemplateInput.schema';
import { ReportDetailCreateNestedManyWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateNestedManyWithoutReportTemplateInput.schema';
import { ReportParameterCreateNestedManyWithoutTemplateInputObjectSchema } from './ReportParameterCreateNestedManyWithoutTemplateInput.schema'

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
  service: z.lazy(() => ServiceCreateNestedOneWithoutReportTemplateInputObjectSchema),
  ReportDetails: z.lazy(() => ReportDetailCreateNestedManyWithoutReportTemplateInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterCreateNestedManyWithoutTemplateInputObjectSchema).optional()
}).strict();
export const ReportTemplateCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateWithoutTenantInput>;
export const ReportTemplateCreateWithoutTenantInputObjectZodSchema = makeSchema();
