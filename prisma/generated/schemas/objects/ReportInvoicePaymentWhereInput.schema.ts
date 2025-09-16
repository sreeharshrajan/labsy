import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumPaymentMethodFilterObjectSchema } from './EnumPaymentMethodFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ReportInvoiceScalarRelationFilterObjectSchema } from './ReportInvoiceScalarRelationFilter.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const reportinvoicepaymentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  method: z.union([z.lazy(() => EnumPaymentMethodFilterObjectSchema), PaymentMethodSchema]).optional(),
  status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  referenceNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  transactionId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  paidAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  invoiceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invoice: z.union([z.lazy(() => ReportInvoiceScalarRelationFilterObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional()
}).strict();
export const ReportInvoicePaymentWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentWhereInput> = reportinvoicepaymentwhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoicePaymentWhereInput>;
export const ReportInvoicePaymentWhereInputObjectZodSchema = reportinvoicepaymentwhereinputSchema;
