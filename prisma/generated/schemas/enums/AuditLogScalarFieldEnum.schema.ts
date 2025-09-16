import { z } from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id', 'action', 'metadata', 'entity', 'entityId', 'ipAddress', 'userAgent', 'createdAt', 'tenantId', 'userId'])

export type AuditLogScalarFieldEnum = z.infer<typeof AuditLogScalarFieldEnumSchema>;