import { z } from 'zod';
import { ReportInvoicePaymentUpdateManyMutationInputObjectSchema } from './objects/ReportInvoicePaymentUpdateManyMutationInput.schema';
import { ReportInvoicePaymentWhereInputObjectSchema } from './objects/ReportInvoicePaymentWhereInput.schema';

export const ReportInvoicePaymentUpdateManySchema = z.object({ data: ReportInvoicePaymentUpdateManyMutationInputObjectSchema, where: ReportInvoicePaymentWhereInputObjectSchema.optional()  })