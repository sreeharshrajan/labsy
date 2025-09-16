import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceCreateManyInputObjectSchema } from './objects/ReportInvoiceCreateManyInput.schema';

export const ReportInvoiceCreateManyAndReturnSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), data: z.union([ ReportInvoiceCreateManyInputObjectSchema, z.array(ReportInvoiceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()