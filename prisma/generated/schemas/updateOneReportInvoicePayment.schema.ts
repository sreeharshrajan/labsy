import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentUpdateInputObjectSchema } from './objects/ReportInvoicePaymentUpdateInput.schema';
import { ReportInvoicePaymentUncheckedUpdateInputObjectSchema } from './objects/ReportInvoicePaymentUncheckedUpdateInput.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';

export const ReportInvoicePaymentUpdateOneSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), data: z.union([ReportInvoicePaymentUpdateInputObjectSchema, ReportInvoicePaymentUncheckedUpdateInputObjectSchema]), where: ReportInvoicePaymentWhereUniqueInputObjectSchema  })