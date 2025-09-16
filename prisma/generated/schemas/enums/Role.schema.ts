import { z } from 'zod';

export const RoleSchema = z.enum(['OWNER', 'ADMIN', 'STAFF', 'VIEWER'])

export type Role = z.infer<typeof RoleSchema>;