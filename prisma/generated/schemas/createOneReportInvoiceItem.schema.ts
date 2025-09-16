import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemCreateInputObjectSchema } from './objects/ReportInvoiceItemCreateInput.schema';
import { ReportInvoiceItemUncheckedCreateInputObjectSchema } from './objects/ReportInvoiceItemUncheckedCreateInput.schema';

export const ReportInvoiceItemCreateOneSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), data: z.union([ReportInvoiceItemCreateInputObjectSchema, ReportInvoiceItemUncheckedCreateInputObjectSchema])  })