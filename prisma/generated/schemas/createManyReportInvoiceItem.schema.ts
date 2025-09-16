import { z } from 'zod';
import { ReportInvoiceItemCreateManyInputObjectSchema } from './objects/ReportInvoiceItemCreateManyInput.schema';

export const ReportInvoiceItemCreateManySchema = z.object({ data: z.union([ ReportInvoiceItemCreateManyInputObjectSchema, z.array(ReportInvoiceItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })