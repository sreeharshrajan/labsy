import { z } from 'zod';
import { ReportInvoicePaymentCreateManyInputObjectSchema } from './objects/ReportInvoicePaymentCreateManyInput.schema';

export const ReportInvoicePaymentCreateManySchema = z.object({ data: z.union([ ReportInvoicePaymentCreateManyInputObjectSchema, z.array(ReportInvoicePaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })