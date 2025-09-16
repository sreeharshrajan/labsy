import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumPaymentTypeFilterObjectSchema } from './EnumPaymentTypeFilter.schema';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { EnumInvoiceStatusFilterObjectSchema } from './EnumInvoiceStatusFilter.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { CustomerScalarRelationFilterObjectSchema } from './CustomerScalarRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { DoctorNullableScalarRelationFilterObjectSchema } from './DoctorNullableScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { ReportInvoiceItemListRelationFilterObjectSchema } from './ReportInvoiceItemListRelationFilter.schema';
import { ReportInvoicePaymentListRelationFilterObjectSchema } from './ReportInvoicePaymentListRelationFilter.schema';
import { DoctorCommissionLogListRelationFilterObjectSchema } from './DoctorCommissionLogListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { ServiceNullableScalarRelationFilterObjectSchema } from './ServiceNullableScalarRelationFilter.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const reportinvoicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceWhereInputObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceWhereInputObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  discount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  netAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  paymentType: z.union([z.lazy(() => EnumPaymentTypeFilterObjectSchema), PaymentTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumInvoiceStatusFilterObjectSchema), InvoiceStatusSchema]).optional(),
  issuedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  serviceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  customer: z.union([z.lazy(() => CustomerScalarRelationFilterObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorNullableScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => ReportInvoiceItemListRelationFilterObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentListRelationFilterObjectSchema).optional(),
  logs: z.lazy(() => DoctorCommissionLogListRelationFilterObjectSchema).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  Service: z.union([z.lazy(() => ServiceNullableScalarRelationFilterObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoiceWhereInput> = reportinvoicewhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceWhereInput>;
export const ReportInvoiceWhereInputObjectZodSchema = reportinvoicewhereinputSchema;
