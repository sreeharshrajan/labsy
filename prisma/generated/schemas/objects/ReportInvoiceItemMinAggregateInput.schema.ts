import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  price: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  total: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  invoiceId: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const ReportInvoiceItemMinAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemMinAggregateInputType>;
export const ReportInvoiceItemMinAggregateInputObjectZodSchema = makeSchema();
