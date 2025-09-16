import { z } from 'zod';
import { ReportInvoiceItemSelectObjectSchema } from './objects/ReportInvoiceItemSelect.schema';
import { ReportInvoiceItemUpdateManyMutationInputObjectSchema } from './objects/ReportInvoiceItemUpdateManyMutationInput.schema';
import { ReportInvoiceItemWhereInputObjectSchema } from './objects/ReportInvoiceItemWhereInput.schema';

export const ReportInvoiceItemUpdateManyAndReturnSchema = z.object({ select: ReportInvoiceItemSelectObjectSchema.optional(), data: ReportInvoiceItemUpdateManyMutationInputObjectSchema, where: ReportInvoiceItemWhereInputObjectSchema.optional()  }).strict()