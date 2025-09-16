import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionArgsObjectSchema } from './DoctorCommissionArgs.schema';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { ReportDetailArgsObjectSchema } from './ReportDetailArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  commissionId: z.boolean().optional(),
  reportDetailId: z.boolean().optional(),
  commissionAmt: z.boolean().optional(),
  commissionStatus: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  commission: z.union([z.boolean(), z.lazy(() => DoctorCommissionArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  reportDetail: z.union([z.boolean(), z.lazy(() => ReportDetailArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionLogSelectObjectSchema: z.ZodType<Prisma.DoctorCommissionLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogSelect>;
export const DoctorCommissionLogSelectObjectZodSchema = makeSchema();
