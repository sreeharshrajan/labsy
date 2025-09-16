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
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  categoryId: z.string().optional().nullable(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema),
  ReportDetail: z.lazy(() => ReportDetailUncheckedCreateNestedManyWithoutServiceInputObjectSchema),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedCreateNestedManyWithoutServiceInputObjectSchema)
}).strict();
export const ServiceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateInput>;
export const ServiceUncheckedCreateInputObjectZodSchema = makeSchema();
