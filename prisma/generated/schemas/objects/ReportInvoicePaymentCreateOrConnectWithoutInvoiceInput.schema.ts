import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateOrConnectWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateOrConnectWithoutInvoiceInput>;
export const ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
