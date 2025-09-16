import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  price: z.number(),
  discount: z.number().optional(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const ReportInvoiceItemCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateWithoutServiceInput>;
export const ReportInvoiceItemCreateWithoutServiceInputObjectZodSchema = makeSchema();
