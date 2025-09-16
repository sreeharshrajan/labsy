import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reportinvoiceitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  discount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  total: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  invoiceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReportInvoiceItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemScalarWhereWithAggregatesInput> = reportinvoiceitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceItemScalarWhereWithAggregatesInput>;
export const ReportInvoiceItemScalarWhereWithAggregatesInputObjectZodSchema = reportinvoiceitemscalarwherewithaggregatesinputSchema;
