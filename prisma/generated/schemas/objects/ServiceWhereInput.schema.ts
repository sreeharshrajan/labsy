import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ServiceCategoryNullableScalarRelationFilterObjectSchema } from './ServiceCategoryNullableScalarRelationFilter.schema';
import { ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';
import { ReportInvoiceItemListRelationFilterObjectSchema } from './ReportInvoiceItemListRelationFilter.schema';
import { ReportDetailListRelationFilterObjectSchema } from './ReportDetailListRelationFilter.schema';
import { ReportTemplateListRelationFilterObjectSchema } from './ReportTemplateListRelationFilter.schema';
import { ReportInvoiceListRelationFilterObjectSchema } from './ReportInvoiceListRelationFilter.schema'

const servicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceWhereInputObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceWhereInputObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  Category: z.union([z.lazy(() => ServiceCategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => ServiceCategoryWhereInputObjectSchema)]).optional(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemListRelationFilterObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailListRelationFilterObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateListRelationFilterObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceListRelationFilterObjectSchema).optional()
}).strict();
export const ServiceWhereInputObjectSchema: z.ZodType<Prisma.ServiceWhereInput> = servicewhereinputSchema as unknown as z.ZodType<Prisma.ServiceWhereInput>;
export const ServiceWhereInputObjectZodSchema = servicewhereinputSchema;
