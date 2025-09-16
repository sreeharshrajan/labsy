import { z } from 'zod';

export const UserStatusSchema = z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'DELETED'])

export type UserStatus = z.infer<typeof UserStatusSchema>;