import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ReportInvoiceScalarRelationFilterObjectSchema } from './ReportInvoiceScalarRelationFilter.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ServiceScalarRelationFilterObjectSchema } from './ServiceScalarRelationFilter.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const reportinvoiceitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportInvoiceItemWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportInvoiceItemWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  discount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  total: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  invoiceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invoice: z.union([z.lazy(() => ReportInvoiceScalarRelationFilterObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  service: z.union([z.lazy(() => ServiceScalarRelationFilterObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceItemWhereInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemWhereInput> = reportinvoiceitemwhereinputSchema as unknown as z.ZodType<Prisma.ReportInvoiceItemWhereInput>;
export const ReportInvoiceItemWhereInputObjectZodSchema = reportinvoiceitemwhereinputSchema;
