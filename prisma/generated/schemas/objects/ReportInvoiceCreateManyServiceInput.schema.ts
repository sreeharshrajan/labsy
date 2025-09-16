import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  totalAmount: z.number(),
  discount: z.number().optional(),
  netAmount: z.number(),
  paymentType: PaymentTypeSchema,
  status: InvoiceStatusSchema.optional(),
  issuedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  customerId: z.string(),
  doctorId: z.string().optional().nullable()
}).strict();
export const ReportInvoiceCreateManyServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateManyServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateManyServiceInput>;
export const ReportInvoiceCreateManyServiceInputObjectZodSchema = makeSchema();
