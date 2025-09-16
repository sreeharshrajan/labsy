import { z } from 'zod';
import { ReportInvoicePaymentSelectObjectSchema } from './objects/ReportInvoicePaymentSelect.schema';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentCreateInputObjectSchema } from './objects/ReportInvoicePaymentCreateInput.schema';
import { ReportInvoicePaymentUncheckedCreateInputObjectSchema } from './objects/ReportInvoicePaymentUncheckedCreateInput.schema';
import { ReportInvoicePaymentUpdateInputObjectSchema } from './objects/ReportInvoicePaymentUpdateInput.schema';
import { ReportInvoicePaymentUncheckedUpdateInputObjectSchema } from './objects/ReportInvoicePaymentUncheckedUpdateInput.schema';

export const ReportInvoicePaymentUpsertSchema = z.object({ select: ReportInvoicePaymentSelectObjectSchema.optional(), include: ReportInvoicePaymentIncludeObjectSchema.optional(), where: ReportInvoicePaymentWhereUniqueInputObjectSchema, create: z.union([ ReportInvoicePaymentCreateInputObjectSchema, ReportInvoicePaymentUncheckedCreateInputObjectSchema ]), update: z.union([ ReportInvoicePaymentUpdateInputObjectSchema, ReportInvoicePaymentUncheckedUpdateInputObjectSchema ])  })