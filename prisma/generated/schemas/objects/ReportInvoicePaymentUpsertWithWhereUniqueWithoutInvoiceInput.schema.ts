import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUpdateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateWithoutInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInput>;
export const ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
