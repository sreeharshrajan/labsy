import { z } from 'zod';

import { UserTitleSchema } from '../../enums/UserTitle.schema';
import { UserStatusSchema } from '../../enums/UserStatus.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    userTitle: UserTitleSchema,
    name: z.string().optional().nullable(),
    email: z.string(),
    image: z.string().optional().nullable(),
    passwordHash: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    isSuperAdmin: z.boolean(),
    status: UserStatusSchema,
    dateOfBirth: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenants: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    auditLogs: z.array(z.unknown()),
    userAddresses: z.array(z.unknown()),
    ReportChangeLog: z.array(z.unknown()),
    Notification: z.array(z.unknown()),
    posts: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
