import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceCreateInputObjectSchema } from './objects/ReportInvoiceCreateInput.schema';
import { ReportInvoiceUncheckedCreateInputObjectSchema } from './objects/ReportInvoiceUncheckedCreateInput.schema';

export const ReportInvoiceCreateOneSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), data: z.union([ReportInvoiceCreateInputObjectSchema, ReportInvoiceUncheckedCreateInputObjectSchema])  })