import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  price: z.number(),
  discount: z.number().optional(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  serviceId: z.string()
}).strict();
export const ReportInvoiceItemCreateManyInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateManyInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateManyInvoiceInput>;
export const ReportInvoiceItemCreateManyInvoiceInputObjectZodSchema = makeSchema();
