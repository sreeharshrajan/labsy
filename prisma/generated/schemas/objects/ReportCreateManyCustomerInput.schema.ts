import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { CustomerTypeSchema } from '../enums/CustomerType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  reportCode: z.string().optional().nullable(),
  fileUrl: z.string().optional().nullable(),
  collectedPlace: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  status: ReportStatusSchema.optional(),
  customerType: CustomerTypeSchema.optional().nullable(),
  issuedAt: z.coerce.date().optional().nullable(),
  collectedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  version: z.number().int().optional(),
  tenantId: z.string(),
  doctorId: z.string().optional().nullable(),
  invoiceId: z.string(),
  createdBy: z.string().optional().nullable(),
  collectedBy: z.string().optional().nullable(),
  customerAddressId: z.string().optional().nullable(),
  labAddressId: z.string().optional().nullable()
}).strict();
export const ReportCreateManyCustomerInputObjectSchema: z.ZodType<Prisma.ReportCreateManyCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCustomerInput>;
export const ReportCreateManyCustomerInputObjectZodSchema = makeSchema();
