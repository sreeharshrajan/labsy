import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';

export const ReportInvoiceDeleteOneSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), where: ReportInvoiceWhereUniqueInputObjectSchema  })