import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutServiceInputObjectSchema } from './TenantCreateNestedOneWithoutServiceInput.schema';
import { ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema } from './ServiceCategoryCreateNestedOneWithoutServicesInput.schema';
import { ReportInvoiceItemCreateNestedManyWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateNestedManyWithoutServiceInput.schema';
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
  deletedAt: z.coerce.date().optional().nullable(),
  Tenant: z.lazy(() => TenantCreateNestedOneWithoutServiceInputObjectSchema),
  Category: z.lazy(() => ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema).optional(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemCreateNestedManyWithoutServiceInputObjectSchema),
  ReportDetail: z.lazy(() => ReportDetailCreateNestedManyWithoutServiceInputObjectSchema),
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedManyWithoutServiceInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutServiceInputObjectSchema)
}).strict();
export const ServiceCreateInputObjectSchema: z.ZodType<Prisma.ServiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateInput>;
export const ServiceCreateInputObjectZodSchema = makeSchema();
