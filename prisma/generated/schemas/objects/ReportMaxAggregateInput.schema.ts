import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reportCode: z.literal(true).optional(),
  fileUrl: z.literal(true).optional(),
  collectedPlace: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  status: z.literal(true).optional(),
  customerType: z.literal(true).optional(),
  issuedAt: z.literal(true).optional(),
  collectedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  version: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  invoiceId: z.literal(true).optional(),
  createdBy: z.literal(true).optional(),
  collectedBy: z.literal(true).optional(),
  customerAddressId: z.literal(true).optional(),
  labAddressId: z.literal(true).optional()
}).strict();
export const ReportMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReportMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportMaxAggregateInputType>;
export const ReportMaxAggregateInputObjectZodSchema = makeSchema();
