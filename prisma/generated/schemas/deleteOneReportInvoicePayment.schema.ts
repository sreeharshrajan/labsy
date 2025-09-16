import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';

export const ReportInvoicePaymentDeleteOneSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), where: ReportInvoicePaymentWhereUniqueInputObjectSchema  })