import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { CustomerArgsObjectSchema } from './CustomerArgs.schema';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { ReportInvoiceArgsObjectSchema } from './ReportInvoiceArgs.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportChangeLogFindManySchema } from '../findManyReportChangeLog.schema';
import { TenantUserArgsObjectSchema } from './TenantUserArgs.schema';
import { CustomerAddressArgsObjectSchema } from './CustomerAddressArgs.schema';
import { TenantAddressArgsObjectSchema } from './TenantAddressArgs.schema';
import { ReportCountOutputTypeArgsObjectSchema } from './ReportCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  customer: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  invoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  updateLog: z.union([z.boolean(), z.lazy(() => ReportChangeLogFindManySchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  collectedByUser: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  customerAddress: z.union([z.boolean(), z.lazy(() => CustomerAddressArgsObjectSchema)]).optional(),
  labAddress: z.union([z.boolean(), z.lazy(() => TenantAddressArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportIncludeObjectSchema: z.ZodType<Prisma.ReportInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportInclude>;
export const ReportIncludeObjectZodSchema = makeSchema();
