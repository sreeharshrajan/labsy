import { z } from 'zod';

export const ReportParameterScalarFieldEnumSchema = z.enum(['id', 'name', 'unit', 'method', 'turnaroundTime', 'isCritical', 'criticalLow', 'criticalHigh', 'genderSpecific', 'ageSpecific', 'notes', 'referenceMin', 'referenceMax', 'gender', 'ageMin', 'ageMax', 'createdAt', 'updatedAt', 'deletedAt', 'templateId'])

export type ReportParameterScalarFieldEnum = z.infer<typeof ReportParameterScalarFieldEnumSchema>;