import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateNestedManyWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateNestedManyWithoutServiceInput.schema';
import { ReportInvoiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedCreateNestedManyWithoutServiceInput.schema'

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
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServiceUncheckedCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateWithoutCategoryInput>;
export const ServiceUncheckedCreateWithoutCategoryInputObjectZodSchema = makeSchema();
