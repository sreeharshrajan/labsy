import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';

export const ReportInvoiceItemFindUniqueSchema: z.ZodType<Prisma.ReportInvoiceItemFindUniqueArgs> = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceItemFindUniqueArgs>;

export const ReportInvoiceItemFindUniqueZodSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema }).strict();