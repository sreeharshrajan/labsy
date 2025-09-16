import { z } from 'zod';

export const ReportInvoicePaymentScalarFieldEnumSchema = z.enum(['id', 'amount', 'method', 'status', 'referenceNo', 'transactionId', 'paidAt', 'createdAt', 'updatedAt', 'deletedAt', 'invoiceId', 'tenantId'])

export type ReportInvoicePaymentScalarFieldEnum = z.infer<typeof ReportInvoicePaymentScalarFieldEnumSchema>;