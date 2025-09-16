import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentTypeSchema } from '../enums/PaymentType.schema';
import { InvoiceStatusSchema } from '../enums/InvoiceStatus.schema';
import { CustomerCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './CustomerCreateNestedOneWithoutReportInvoiceInput.schema';
import { DoctorCreateNestedOneWithoutReportInvoiceInputObjectSchema } from './DoctorCreateNestedOneWithoutReportInvoiceInput.schema';
import { ReportInvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateNestedManyWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateNestedManyWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateNestedManyWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateNestedManyWithoutInvoiceInput.schema';
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
  customer: z.lazy(() => CustomerCreateNestedOneWithoutReportInvoiceInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutReportInvoiceInputObjectSchema).optional(),
  items: z.lazy(() => ReportInvoiceItemCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  payments: z.lazy(() => ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  logs: z.lazy(() => DoctorCommissionLogCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutInvoiceInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceCreateNestedOneWithoutReportInvoiceInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateWithoutTenantInput>;
export const ReportInvoiceCreateWithoutTenantInputObjectZodSchema = makeSchema();
