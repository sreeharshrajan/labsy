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
import { IntFilterObjectSchema } from './IntFilter.schema'

const reportscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional(),
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
  labAddressId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ReportScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportScalarWhereInput> = reportscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportScalarWhereInput>;
export const ReportScalarWhereInputObjectZodSchema = reportscalarwhereinputSchema;
