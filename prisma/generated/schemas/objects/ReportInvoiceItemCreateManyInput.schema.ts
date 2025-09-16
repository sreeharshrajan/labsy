import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  price: z.number(),
  discount: z.number().optional(),
  total: z.number(),
  createdAt: z.coerce.date().optional(),
  invoiceId: z.string(),
  serviceId: z.string()
}).strict();
export const ReportInvoiceItemCreateManyInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateManyInput>;
export const ReportInvoiceItemCreateManyInputObjectZodSchema = makeSchema();
