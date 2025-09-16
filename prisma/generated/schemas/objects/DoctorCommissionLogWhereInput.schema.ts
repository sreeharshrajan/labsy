import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumDoctorCommissionStatusFilterObjectSchema } from './EnumDoctorCommissionStatusFilter.schema';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DoctorCommissionScalarRelationFilterObjectSchema } from './DoctorCommissionScalarRelationFilter.schema';
import { DoctorCommissionWhereInputObjectSchema } from './DoctorCommissionWhereInput.schema';
import { DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { ReportInvoiceNullableScalarRelationFilterObjectSchema } from './ReportInvoiceNullableScalarRelationFilter.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportDetailNullableScalarRelationFilterObjectSchema } from './ReportDetailNullableScalarRelationFilter.schema';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema'

const doctorcommissionlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorCommissionLogWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorCommissionLogWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invoiceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commissionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportDetailId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commissionAmt: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  commissionStatus: z.union([z.lazy(() => EnumDoctorCommissionStatusFilterObjectSchema), DoctorCommissionStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  commission: z.union([z.lazy(() => DoctorCommissionScalarRelationFilterObjectSchema), z.lazy(() => DoctorCommissionWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  invoice: z.union([z.lazy(() => ReportInvoiceNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  reportDetail: z.union([z.lazy(() => ReportDetailNullableScalarRelationFilterObjectSchema), z.lazy(() => ReportDetailWhereInputObjectSchema)]).optional()
}).strict();
export const DoctorCommissionLogWhereInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogWhereInput> = doctorcommissionlogwhereinputSchema as unknown as z.ZodType<Prisma.DoctorCommissionLogWhereInput>;
export const DoctorCommissionLogWhereInputObjectZodSchema = doctorcommissionlogwhereinputSchema;
