import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDoctorStatusFilterObjectSchema } from './EnumDoctorStatusFilter.schema';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ReportInvoiceListRelationFilterObjectSchema } from './ReportInvoiceListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { DoctorAddressListRelationFilterObjectSchema } from './DoctorAddressListRelationFilter.schema';
import { DoctorCommissionListRelationFilterObjectSchema } from './DoctorCommissionListRelationFilter.schema';
import { DoctorCommissionPaymentListRelationFilterObjectSchema } from './DoctorCommissionPaymentListRelationFilter.schema';
import { DoctorCommissionLogListRelationFilterObjectSchema } from './DoctorCommissionLogListRelationFilter.schema'

const doctorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorWhereInputObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorWhereInputObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  specialization: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  registrationNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  clinicName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDoctorStatusFilterObjectSchema), DoctorStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceListRelationFilterObjectSchema).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressListRelationFilterObjectSchema).optional(),
  doctorCommissions: z.lazy(() => DoctorCommissionListRelationFilterObjectSchema).optional(),
  doctorPayments: z.lazy(() => DoctorCommissionPaymentListRelationFilterObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogListRelationFilterObjectSchema).optional()
}).strict();
export const DoctorWhereInputObjectSchema: z.ZodType<Prisma.DoctorWhereInput> = doctorwhereinputSchema as unknown as z.ZodType<Prisma.DoctorWhereInput>;
export const DoctorWhereInputObjectZodSchema = doctorwhereinputSchema;
