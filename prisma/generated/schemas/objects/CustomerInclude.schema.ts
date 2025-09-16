import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ReportInvoiceFindManySchema } from '../findManyReportInvoice.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { CustomerAddressFindManySchema } from '../findManyCustomerAddress.schema';
import { CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  ReportInvoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  customerAddresses: z.union([z.boolean(), z.lazy(() => CustomerAddressFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerIncludeObjectSchema: z.ZodType<Prisma.CustomerInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomerInclude>;
export const CustomerIncludeObjectZodSchema = makeSchema();
