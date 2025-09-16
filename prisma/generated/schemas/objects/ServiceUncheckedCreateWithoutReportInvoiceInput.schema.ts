import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateNestedManyWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateNestedManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  price: z.number(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  categoryId: z.string().optional().nullable(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateWithoutReportInvoiceInput>;
export const ServiceUncheckedCreateWithoutReportInvoiceInputObjectZodSchema = makeSchema();
