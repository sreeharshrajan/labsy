import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { CustomerArgsObjectSchema } from './CustomerArgs.schema';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { ReportInvoiceItemFindManySchema } from '../findManyReportInvoiceItem.schema';
import { ReportInvoicePaymentFindManySchema } from '../findManyReportInvoicePayment.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema';
import { ReportInvoiceCountOutputTypeArgsObjectSchema } from './ReportInvoiceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  customer: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => ReportInvoiceItemFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => ReportInvoicePaymentFindManySchema)]).optional(),
  logs: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  Service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportInvoiceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportInvoiceIncludeObjectSchema: z.ZodType<Prisma.ReportInvoiceInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceInclude>;
export const ReportInvoiceIncludeObjectZodSchema = makeSchema();
