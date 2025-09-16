import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { TenantCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './TenantCreateNestedOneWithoutReportInvoiceInput.schema';
import { CustomerCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './CustomerCreateNestedOneWithoutReportInvoiceInput.schema';
import { DoctorCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './DoctorCreateNestedOneWithoutReportInvoiceInput.schema';
import { ReportInvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateNestedManyWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateNestedManyWithoutInvoiceInput.schema';
import { ReportCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportCreateNestedManyWithoutInvoiceInput.schema';
import { ServiceCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './ServiceCreateNestedOneWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  totalAmount: z.number(),
  discount: z.number().optional(),
  netAmount: z.number(),
  paymentType: PaymentTypeSchema,
  status: InvoiceStatusSchema.optional(),
  issuedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutReportInvoiceInputObjectSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutReportInvoiceInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutReportInvoiceInputObjectSchema).optional(),
  items: z.lazy(() => ReportInvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceCreateNestedOneWithoutReportInvoiceInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateWithoutLogsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateWithoutLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateWithoutLogsInput>;
export const ReportInvoiceCreateWithoutLogsInputObjectZodSchema = makeSchema();
