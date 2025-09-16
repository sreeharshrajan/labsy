import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentUpdateManyMutationInputObjectSchema } from './objects/ReportInvoicePaymentUpdateManyMutationInput.schema';
import { ReportInvoicePaymentWhereInputObjectSchema } from './objects/ReportInvoicePaymentWhereInput.schema';

export const ReportInvoicePaymentUpdateManyAndReturnSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), data: ReportInvoicePaymentUpdateManyMutationInputObjectSchema, where: ReportInvoicePaymentWhereInputObjectSchema.optional()  }).strict()