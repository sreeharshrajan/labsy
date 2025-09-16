import { z } from 'zod';

export const SystemPermissionScalarFieldEnumSchema = z.enum(['id', 'action', 'resource', 'conditions', 'roleTemplateId'])

export type SystemPermissionScalarFieldEnum = z.infer<typeof SystemPermissionScalarFieldEnumSchema>;