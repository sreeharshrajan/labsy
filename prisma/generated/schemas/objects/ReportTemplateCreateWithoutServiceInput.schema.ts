import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutReportTemplateInputObjectSchema } from './TenantCreateNestedOneWithoutReportTemplateInput.schema';
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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutReportTemplateInputObjectSchema),
  ReportDetails: z.lazy(() => ReportDetailCreateNestedManyWithoutReportTemplateInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterCreateNestedManyWithoutTemplateInputObjectSchema).optional()
}).strict();
export const ReportTemplateCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateWithoutServiceInput>;
export const ReportTemplateCreateWithoutServiceInputObjectZodSchema = makeSchema();
