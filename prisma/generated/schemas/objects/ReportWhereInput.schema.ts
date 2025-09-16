import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumReportStatusFilterObjectSchema } from './EnumReportStatusFilter.schema';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { EnumCustomerTypeNullableFilterObjectSchema } from './EnumCustomerTypeNullableFilter.schema';
import { CustomerTypeSchema } from '../enums/CustomerType.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { CustomerScalarRelationFilterObjectSchema } from './CustomerScalarRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { DoctorNullableScalarRelationFilterObjectSchema } from './DoctorNullableScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { ReportInvoiceScalarRelationFilterObjectSchema } from './ReportInvoiceScalarRelationFilter.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportDetailListRelationFilterObjectSchema } from './ReportDetailListRelationFilter.schema';
import { ReportChangeLogListRelationFilterObjectSchema } from './ReportChangeLogListRelationFilter.schema';
import { TenantUserNullableScalarRelationFilterObjectSchema } from './TenantUserNullableScalarRelationFilter.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { CustomerAddressNullableScalarRelationFilterObjectSchema } from './CustomerAddressNullableScalarRelationFilter.schema';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema';
import { TenantAddressNullableScalarRelationFilterObjectSchema } from './TenantAddressNullableScalarRelationFilter.schema';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema'

const reportwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  fileUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  collectedPlace: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumReportStatusFilterObjectSchema), ReportStatusSchema]).optional(),
  customerType: z.union([z.lazy(() => EnumCustomerTypeNullableFilterObjectSchema), CustomerTypeSchema]).optional().nullable(),
  issuedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  collectedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  invoiceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdBy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  collectedBy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  customerAddressId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  labAddressId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  customer: z.union([z.lazy(() => CustomerScalarRelationFilterObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorNullableScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  invoice: z.union([z.lazy(() => ReportInvoiceScalarRelationFilterObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  details: z.lazy(() => ReportDetailListRelationFilterObjectSchema).optional(),
  updateLog: z.lazy(() => ReportChangeLogListRelationFilterObjectSchema).optional(),
  createdByUser: z.union([z.lazy(() => TenantUserNullableScalarRelationFilterObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  collectedByUser: z.union([z.lazy(() => TenantUserNullableScalarRelationFilterObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  customerAddress: z.union([z.lazy(() => CustomerAddressNullableScalarRelationFilterObjectSchema), z.lazy(() => CustomerAddressWhereInputObjectSchema)]).optional(),
  labAddress: z.union([z.lazy(() => TenantAddressNullableScalarRelationFilterObjectSchema), z.lazy(() => TenantAddressWhereInputObjectSchema)]).optional()
}).strict();
export const ReportWhereInputObjectSchema: z.ZodType<Prisma.ReportWhereInput> = reportwhereinputSchema as unknown as z.ZodType<Prisma.ReportWhereInput>;
export const ReportWhereInputObjectZodSchema = reportwhereinputSchema;
