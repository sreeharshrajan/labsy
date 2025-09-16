import { z } from 'zod';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './objects/ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';

export const ReportInvoiceUpdateManySchema = z.object({ data: ReportInvoiceUpdateManyMutationInputObjectSchema, where: ReportInvoiceWhereInputObjectSchema.optional()  })