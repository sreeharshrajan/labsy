import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateInputObjectSchema } from './objects/ReportInvoiceCreateInput.schema';
import { ReportInvoiceUncheckedCreateInputObjectSchema } from './objects/ReportInvoiceUncheckedCreateInput.schema';
import { ReportInvoiceUpdateInputObjectSchema } from './objects/ReportInvoiceUpdateInput.schema';
import { ReportInvoiceUncheckedUpdateInputObjectSchema } from './objects/ReportInvoiceUncheckedUpdateInput.schema';

export const ReportInvoiceUpsertSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), where: ReportInvoiceWhereUniqueInputObjectSchema, create: z.union([ ReportInvoiceCreateInputObjectSchema, ReportInvoiceUncheckedCreateInputObjectSchema ]), update: z.union([ ReportInvoiceUpdateInputObjectSchema, ReportInvoiceUncheckedUpdateInputObjectSchema ])  })