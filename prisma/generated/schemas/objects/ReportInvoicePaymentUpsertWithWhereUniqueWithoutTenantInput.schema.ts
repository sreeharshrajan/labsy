import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUpdateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInput>;
export const ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
