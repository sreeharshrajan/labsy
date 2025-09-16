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
export const ReportInvoiceItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemMaxAggregateInputType>;
export const ReportInvoiceItemMaxAggregateInputObjectZodSchema = makeSchema();
