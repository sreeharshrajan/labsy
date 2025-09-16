import { z } from 'zod';
import { ReportInvoiceSelectObjectSchema } from './objects/ReportInvoiceSelect.schema';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceUpdateInputObjectSchema } from './objects/ReportInvoiceUpdateInput.schema';
import { ReportInvoiceUncheckedUpdateInputObjectSchema } from './objects/ReportInvoiceUncheckedUpdateInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';

export const ReportInvoiceUpdateOneSchema = z.object({ select: ReportInvoiceSelectObjectSchema.optional(), include: ReportInvoiceIncludeObjectSchema.optional(), data: z.union([ReportInvoiceUpdateInputObjectSchema, ReportInvoiceUncheckedUpdateInputObjectSchema]), where: ReportInvoiceWhereUniqueInputObjectSchema  })