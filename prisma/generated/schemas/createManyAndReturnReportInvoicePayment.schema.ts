import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentCreateManyInputObjectSchema } from './objects/ReportInvoicePaymentCreateManyInput.schema';

export const ReportInvoicePaymentCreateManyAndReturnSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), data: z.union([ ReportInvoicePaymentCreateManyInputObjectSchema, z.array(ReportInvoicePaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()