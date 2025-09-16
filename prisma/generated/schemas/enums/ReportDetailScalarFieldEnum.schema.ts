import { z } from 'zod';

export const ReportDetailScalarFieldEnumSchema = z.enum(['id', 'parameterName', 'parameterUnit', 'parameterReferenceMin', 'parameterReferenceMax', 'resultText', 'resultValue', 'remarks', 'amount', 'createdAt', 'lastEditedAt', 'deletedAt', 'reportId', 'parameterId', 'serviceId', 'reportTemplateId'])

export type ReportDetailScalarFieldEnum = z.infer<typeof ReportDetailScalarFieldEnumSchema>;