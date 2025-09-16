import { z } from 'zod';

export const SystemRoleTemplateScalarFieldEnumSchema = z.enum(['id', 'role', 'name', 'description', 'isDefault'])

export type SystemRoleTemplateScalarFieldEnum = z.infer<typeof SystemRoleTemplateScalarFieldEnumSchema>;