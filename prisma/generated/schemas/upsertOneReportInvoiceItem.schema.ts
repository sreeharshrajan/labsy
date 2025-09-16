import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemCreateInputObjectSchema } from './objects/ReportInvoiceItemCreateInput.schema';
import { ReportInvoiceItemUncheckedCreateInputObjectSchema } from './objects/ReportInvoiceItemUncheckedCreateInput.schema';
import { ReportInvoiceItemUpdateInputObjectSchema } from './objects/ReportInvoiceItemUpdateInput.schema';
import { ReportInvoiceItemUncheckedUpdateInputObjectSchema } from './objects/ReportInvoiceItemUncheckedUpdateInput.schema';

export const ReportInvoiceItemUpsertSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema, create: z.union([ ReportInvoiceItemCreateInputObjectSchema, ReportInvoiceItemUncheckedCreateInputObjectSchema ]), update: z.union([ ReportInvoiceItemUpdateInputObjectSchema, ReportInvoiceItemUncheckedUpdateInputObjectSchema ])  })