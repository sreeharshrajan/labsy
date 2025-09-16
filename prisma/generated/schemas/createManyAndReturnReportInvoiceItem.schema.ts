import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemCreateManyInputObjectSchema } from './objects/ReportInvoiceItemCreateManyInput.schema';

export const ReportInvoiceItemCreateManyAndReturnSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), data: z.union([ ReportInvoiceItemCreateManyInputObjectSchema, z.array(ReportInvoiceItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()