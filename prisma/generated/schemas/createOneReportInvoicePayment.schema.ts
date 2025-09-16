import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentCreateInputObjectSchema } from './objects/ReportInvoicePaymentCreateInput.schema';
import { ReportInvoicePaymentUncheckedCreateInputObjectSchema } from './objects/ReportInvoicePaymentUncheckedCreateInput.schema';

export const ReportInvoicePaymentCreateOneSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), data: z.union([ReportInvoicePaymentCreateInputObjectSchema, ReportInvoicePaymentUncheckedCreateInputObjectSchema])  })