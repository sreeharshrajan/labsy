import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUpdateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInput>;
export const ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
