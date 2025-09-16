import { z } from 'zod';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';

export const ReportInvoiceDeleteManySchema = z.object({ where: ReportInvoiceWhereInputObjectSchema.optional()  })