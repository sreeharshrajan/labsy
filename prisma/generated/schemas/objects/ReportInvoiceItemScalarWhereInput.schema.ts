import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reportinvoiceitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  discount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  total: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  invoiceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReportInvoiceItemScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemScalarWhereInput> = reportinvoiceitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceItemScalarWhereInput>;
export const ReportInvoiceItemScalarWhereInputObjectZodSchema = reportinvoiceitemscalarwhereinputSchema;
