import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';

export const ReportInvoiceItemFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportInvoiceItemFindUniqueOrThrowArgs> = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceItemFindUniqueOrThrowArgs>;

export const ReportInvoiceItemFindUniqueOrThrowZodSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema }).strict();