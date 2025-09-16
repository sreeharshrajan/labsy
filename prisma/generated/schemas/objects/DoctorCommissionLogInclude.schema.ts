import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionArgsObjectSchema } from './DoctorCommissionArgs.schema';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { ReportDetailArgsObjectSchema } from './ReportDetailArgs.schema'

const makeSchema = () => z.object({
  commission: z.union([z.boolean(), z.lazy(() => DoctorCommissionArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  reportDetail: z.union([z.boolean(), z.lazy(() => ReportDetailArgsObjectSchema)]).optional()
}).strict();
export const DoctorCommissionLogIncludeObjectSchema: z.ZodType<Prisma.DoctorCommissionLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogInclude>;
export const DoctorCommissionLogIncludeObjectZodSchema = makeSchema();
