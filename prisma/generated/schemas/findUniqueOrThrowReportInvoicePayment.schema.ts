import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';

export const ReportInvoicePaymentFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportInvoicePaymentFindUniqueOrThrowArgs> = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), where: ReportInvoicePaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportInvoicePaymentFindUniqueOrThrowArgs>;

export const ReportInvoicePaymentFindUniqueOrThrowZodSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), where: ReportInvoicePaymentWhereUniqueInputObjectSchema }).strict();