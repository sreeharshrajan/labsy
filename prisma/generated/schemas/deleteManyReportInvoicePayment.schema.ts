import { z } from 'zod';
import { ReportInvoicePaymentWhereInputObjectSchema } from './objects/ReportInvoicePaymentWhereInput.schema';

export const ReportInvoicePaymentDeleteManySchema = z.object({ where: ReportInvoicePaymentWhereInputObjectSchema.optional()  })