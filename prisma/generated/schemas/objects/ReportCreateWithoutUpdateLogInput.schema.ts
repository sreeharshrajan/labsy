import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { CustomerTypeSchema } from '../enums/CustomerType.schema';
import { TenantCreateNestedOneWithoutReportInputObjectSchema } from './TenantCreateNestedOneWithoutReportInput.schema';
import { CustomerCreateNestedOneWithoutReportInputObjectSchema } from './CustomerCreateNestedOneWithoutReportInput.schema';
import { DoctorCreateNestedOneWithoutReportInputObjectSchema } from './DoctorCreateNestedOneWithoutReportInput.schema';
import { ReportInvoiceCreateNestedOneWithoutReportInputObjectSchema } from './ReportInvoiceCreateNestedOneWithoutReportInput.schema';
import { ReportDetailCreateNestedManyWithoutReportInputObjectSchema } from './ReportDetailCreateNestedManyWithoutReportInput.schema';
import { TenantUserCreateNestedOneWithoutReportInputObjectSchema } from './TenantUserCreateNestedOneWithoutReportInput.schema';
import { TenantUserCreateNestedOneWithoutCollectedByInputObjectSchema } from './TenantUserCreateNestedOneWithoutCollectedByInput.schema';
import { CustomerAddressCreateNestedOneWithoutReportInputObjectSchema } from './CustomerAddressCreateNestedOneWithoutReportInput.schema';
import { TenantAddressCreateNestedOneWithoutReportInputObjectSchema } from './TenantAddressCreateNestedOneWithoutReportInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  reportCode: z.string().optional().nullable(),
  fileUrl: z.string().optional().nullable(),
  collectedPlace: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  status: ReportStatusSchema.optional(),
  customerType: CustomerTypeSchema.optional().nullable(),
  issuedAt: z.coerce.date().optional().nullable(),
  collectedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  version: z.number().int().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutReportInputObjectSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutReportInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutReportInputObjectSchema).optional(),
  invoice: z.lazy(() => ReportInvoiceCreateNestedOneWithoutReportInputObjectSchema),
  details: z.lazy(() => ReportDetailCreateNestedManyWithoutReportInputObjectSchema).optional(),
  createdByUser: z.lazy(() => TenantUserCreateNestedOneWithoutReportInputObjectSchema).optional(),
  collectedByUser: z.lazy(() => TenantUserCreateNestedOneWithoutCollectedByInputObjectSchema).optional(),
  customerAddress: z.lazy(() => CustomerAddressCreateNestedOneWithoutReportInputObjectSchema).optional(),
  labAddress: z.lazy(() => TenantAddressCreateNestedOneWithoutReportInputObjectSchema).optional()
}).strict();
export const ReportCreateWithoutUpdateLogInputObjectSchema: z.ZodType<Prisma.ReportCreateWithoutUpdateLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateWithoutUpdateLogInput>;
export const ReportCreateWithoutUpdateLogInputObjectZodSchema = makeSchema();
