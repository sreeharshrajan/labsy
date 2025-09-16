import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutReportTemplateInputObjectSchema } from './TenantCreateNestedOneWithoutReportTemplateInput.schema';
import { ServiceCreateNestedOneWithoutReportTemplateInputObjectSchema } from './ServiceCreateNestedOneWithoutReportTemplateInput.schema';
import { ReportDetailCreateNestedManyWithoutReportTemplateInputObjectSchema } from './ReportDetailCreateNestedManyWithoutReportTemplateInput.schema'

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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutReportTemplateInputObjectSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutReportTemplateInputObjectSchema),
  ReportDetails: z.lazy(() => ReportDetailCreateNestedManyWithoutReportTemplateInputObjectSchema).optional()
}).strict();
export const ReportTemplateCreateWithoutReportParameterInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateWithoutReportParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateWithoutReportParameterInput>;
export const ReportTemplateCreateWithoutReportParameterInputObjectZodSchema = makeSchema();
