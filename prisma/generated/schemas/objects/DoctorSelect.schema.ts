import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ReportInvoiceFindManySchema } from '../findManyReportInvoice.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { DoctorAddressFindManySchema } from '../findManyDoctorAddress.schema';
import { DoctorCommissionFindManySchema } from '../findManyDoctorCommission.schema';
import { DoctorCommissionPaymentFindManySchema } from '../findManyDoctorCommissionPayment.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { DoctorCountOutputTypeArgsObjectSchema } from './DoctorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  specialization: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  registrationNo: z.boolean().optional(),
  clinicName: z.boolean().optional(),
  department: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  ReportInvoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  doctorAddresses: z.union([z.boolean(), z.lazy(() => DoctorAddressFindManySchema)]).optional(),
  doctorCommissions: z.union([z.boolean(), z.lazy(() => DoctorCommissionFindManySchema)]).optional(),
  doctorPayments: z.union([z.boolean(), z.lazy(() => DoctorCommissionPaymentFindManySchema)]).optional(),
  DoctorCommissionLog: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DoctorSelectObjectSchema: z.ZodType<Prisma.DoctorSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorSelect>;
export const DoctorSelectObjectZodSchema = makeSchema();
