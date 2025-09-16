import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ReportInvoiceFindManySchema } from '../findManyReportInvoice.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { CustomerAddressFindManySchema } from '../findManyCustomerAddress.schema';
import { CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  gender: z.boolean().optional(),
  bloodGroup: z.boolean().optional(),
  maritalStatus: z.boolean().optional(),
  aadharNumber: z.boolean().optional(),
  panNumber: z.boolean().optional(),
  passportNumber: z.boolean().optional(),
  knownAllergies: z.boolean().optional(),
  chronicConditions: z.boolean().optional(),
  medications: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  ReportInvoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  customerAddresses: z.union([z.boolean(), z.lazy(() => CustomerAddressFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerSelectObjectSchema: z.ZodType<Prisma.CustomerSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSelect>;
export const CustomerSelectObjectZodSchema = makeSchema();
