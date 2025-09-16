import { z } from 'zod';

export const ReportInvoiceScalarFieldEnumSchema = z.enum(['id', 'totalAmount', 'discount', 'netAmount', 'paymentType', 'status', 'issuedAt', 'createdAt', 'updatedAt', 'deletedAt', 'tenantId', 'customerId', 'doctorId', 'serviceId'])

export type ReportInvoiceScalarFieldEnum = z.infer<typeof ReportInvoiceScalarFieldEnumSchema>;