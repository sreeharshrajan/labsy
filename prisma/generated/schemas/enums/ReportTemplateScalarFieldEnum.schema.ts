import { z } from 'zod';

export const ReportTemplateScalarFieldEnumSchema = z.enum(['id', 'name', 'unit', 'reference', 'notes', 'isActive', 'createdAt', 'updatedAt', 'deletedAt', 'tenantId', 'serviceId'])

export type ReportTemplateScalarFieldEnum = z.infer<typeof ReportTemplateScalarFieldEnumSchema>;