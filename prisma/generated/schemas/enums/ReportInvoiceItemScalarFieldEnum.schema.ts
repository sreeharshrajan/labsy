import { z } from 'zod';

export const ReportInvoiceItemScalarFieldEnumSchema = z.enum(['id', 'quantity', 'price', 'discount', 'total', 'createdAt', 'invoiceId', 'serviceId'])

export type ReportInvoiceItemScalarFieldEnum = z.infer<typeof ReportInvoiceItemScalarFieldEnumSchema>;