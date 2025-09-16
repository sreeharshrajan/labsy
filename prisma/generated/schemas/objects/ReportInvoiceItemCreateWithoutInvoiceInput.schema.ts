import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateNestedOneWithoutReportInvoiceItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  price: z.number(),
  discount: z.number().optional(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectSchema)
}).strict();
export const ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateWithoutInvoiceInput>;
export const ReportInvoiceItemCreateWithoutInvoiceInputObjectZodSchema = makeSchema();
