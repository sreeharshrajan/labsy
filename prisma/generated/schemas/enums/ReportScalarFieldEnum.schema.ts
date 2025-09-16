import { z } from 'zod';

export const ReportScalarFieldEnumSchema = z.enum(['id', 'reportCode', 'fileUrl', 'collectedPlace', 'notes', 'status', 'customerType', 'issuedAt', 'collectedAt', 'createdAt', 'updatedAt', 'deletedAt', 'version', 'tenantId', 'customerId', 'doctorId', 'invoiceId', 'createdBy', 'collectedBy', 'customerAddressId', 'labAddressId'])

export type ReportScalarFieldEnum = z.infer<typeof ReportScalarFieldEnumSchema>;