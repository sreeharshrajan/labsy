import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutItemsInput.schema';
import { ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateNestedOneWithoutReportInvoiceItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  price: z.number(),
  discount: z.number().optional(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutItemsInputObjectSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectSchema)
}).strict();
export const ReportInvoiceItemCreateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateInput>;
export const ReportInvoiceItemCreateInputObjectZodSchema = makeSchema();
