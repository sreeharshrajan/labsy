import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './objects/ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';

export const ReportInvoiceUpdateManyAndReturnSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), data: ReportInvoiceUpdateManyMutationInputObjectSchema, where: ReportInvoiceWhereInputObjectSchema.optional()  }).strict()