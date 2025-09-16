import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemUpdateInputObjectSchema } from './objects/ReportInvoiceItemUpdateInput.schema';
import { ReportInvoiceItemUncheckedUpdateInputObjectSchema } from './objects/ReportInvoiceItemUncheckedUpdateInput.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';

export const ReportInvoiceItemUpdateOneSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), data: z.union([ReportInvoiceItemUpdateInputObjectSchema, ReportInvoiceItemUncheckedUpdateInputObjectSchema]), where: ReportInvoiceItemWhereUniqueInputObjectSchema  })