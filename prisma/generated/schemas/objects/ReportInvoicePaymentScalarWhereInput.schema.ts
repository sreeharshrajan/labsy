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
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reportinvoicepaymentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema).array()]).optional(),
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
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReportInvoicePaymentScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentScalarWhereInput> = reportinvoicepaymentscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoicePaymentScalarWhereInput>;
export const ReportInvoicePaymentScalarWhereInputObjectZodSchema = reportinvoicepaymentscalarwhereinputSchema;
