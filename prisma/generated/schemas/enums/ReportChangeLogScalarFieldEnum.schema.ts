import { z } from 'zod';

export const ReportChangeLogScalarFieldEnumSchema = z.enum(['id', 'reportId', 'userId', 'changedById', 'editVersion', 'changes', 'timestamp', 'conflictResolved', 'action'])

export type ReportChangeLogScalarFieldEnum = z.infer<typeof ReportChangeLogScalarFieldEnumSchema>;