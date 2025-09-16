import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';

export const ReportInvoiceFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportInvoiceFindUniqueOrThrowArgs> = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), where: ReportInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceFindUniqueOrThrowArgs>;

export const ReportInvoiceFindUniqueOrThrowZodSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), where: ReportInvoiceWhereUniqueInputObjectSchema }).strict();