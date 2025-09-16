import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateOrConnectWithoutTenantInput>;
export const ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
