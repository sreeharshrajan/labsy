import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutServiceInputObjectSchema } from './TenantCreateNestedOneWithoutServiceInput.schema';
import { ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema } from './ServiceCategoryCreateNestedOneWithoutServicesInput.schema';
import { ReportDetailCreateNestedManyWithoutServiceInputObjectSchema } from './ReportDetailCreateNestedManyWithoutServiceInput.schema';
import { ReportTemplateCreateNestedManyWithoutServiceInputObjectSchema } from './ReportTemplateCreateNestedManyWithoutServiceInput.schema';
import { ReportInvoiceCreateNestedManyWithoutServiceInputObjectSchema } from './ReportInvoiceCreateNestedManyWithoutServiceInput.schema'

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
  Tenant: z.lazy(() => TenantCreateNestedOneWithoutServiceInputObjectSchema),
  Category: z.lazy(() => ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServiceCreateWithoutReportInvoiceItemInputObjectSchema: z.ZodType<Prisma.ServiceCreateWithoutReportInvoiceItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateWithoutReportInvoiceItemInput>;
export const ServiceCreateWithoutReportInvoiceItemInputObjectZodSchema = makeSchema();
