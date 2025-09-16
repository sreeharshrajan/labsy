import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  netAmount: z.literal(true).optional(),
  paymentType: z.literal(true).optional(),
  status: z.literal(true).optional(),
  issuedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const ReportInvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReportInvoiceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceMaxAggregateInputType>;
export const ReportInvoiceMaxAggregateInputObjectZodSchema = makeSchema();
