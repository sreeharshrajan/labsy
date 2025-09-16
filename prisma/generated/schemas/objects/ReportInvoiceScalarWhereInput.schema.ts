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
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const reportinvoicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional(),
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
  serviceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ReportInvoiceScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoiceScalarWhereInput> = reportinvoicescalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceScalarWhereInput>;
export const ReportInvoiceScalarWhereInputObjectZodSchema = reportinvoicescalarwhereinputSchema;
