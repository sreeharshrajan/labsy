import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { EnumPaymentTypeWithAggregatesFilterObjectSchema } from './EnumPaymentTypeWithAggregatesFilter.schema';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { EnumInvoiceStatusWithAggregatesFilterObjectSchema } from './EnumInvoiceStatusWithAggregatesFilter.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const reportinvoicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  discount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  netAmount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  paymentType: z.union([z.lazy(() => EnumPaymentTypeWithAggregatesFilterObjectSchema), PaymentTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumInvoiceStatusWithAggregatesFilterObjectSchema), InvoiceStatusSchema]).optional(),
  issuedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  serviceId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ReportInvoiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReportInvoiceScalarWhereWithAggregatesInput> = reportinvoicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceScalarWhereWithAggregatesInput>;
export const ReportInvoiceScalarWhereWithAggregatesInputObjectZodSchema = reportinvoicescalarwherewithaggregatesinputSchema;
