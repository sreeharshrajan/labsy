import { z } from 'zod';
import { ReportInvoiceItemUpdateManyMutationInputObjectSchema } from './objects/ReportInvoiceItemUpdateManyMutationInput.schema';
import { ReportInvoiceItemWhereInputObjectSchema } from './objects/ReportInvoiceItemWhereInput.schema';

export const ReportInvoiceItemUpdateManySchema = z.object({ data: ReportInvoiceItemUpdateManyMutationInputObjectSchema, where: ReportInvoiceItemWhereInputObjectSchema.optional()  })