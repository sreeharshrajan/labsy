import { z } from 'zod';
import { ReportInvoiceItemWhereInputObjectSchema } from './objects/ReportInvoiceItemWhereInput.schema';

export const ReportInvoiceItemDeleteManySchema = z.object({ where: ReportInvoiceItemWhereInputObjectSchema.optional()  })