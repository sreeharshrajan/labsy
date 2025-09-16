import { z } from 'zod';
import { ReportInvoiceCreateManyInputObjectSchema } from './objects/ReportInvoiceCreateManyInput.schema';

export const ReportInvoiceCreateManySchema = z.object({ data: z.union([ ReportInvoiceCreateManyInputObjectSchema, z.array(ReportInvoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })