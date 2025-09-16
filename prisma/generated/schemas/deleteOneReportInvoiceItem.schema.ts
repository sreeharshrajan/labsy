import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';

export const ReportInvoiceItemDeleteOneSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), include: ReportInvoiceItemIncludeObjectSchema.optional(), where: ReportInvoiceItemWhereUniqueInputObjectSchema  })