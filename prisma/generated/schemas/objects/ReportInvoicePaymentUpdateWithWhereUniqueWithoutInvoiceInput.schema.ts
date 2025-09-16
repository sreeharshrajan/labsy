import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUpdateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInput>;
export const ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
