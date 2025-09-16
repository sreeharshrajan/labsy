import { z } from 'zod';

import { UserTitleSchema } from '../../enums/UserTitle.schema';
import { UserStatusSchema } from '../../enums/UserStatus.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    userTitle: UserTitleSchema,
    name: z.string().nullable(),
    email: z.string(),
    image: z.string().nullable(),
    passwordHash: z.string().nullable(),
    phone: z.string().nullable(),
    isSuperAdmin: z.boolean(),
    status: UserStatusSchema,
    dateOfBirth: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenants: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    auditLogs: z.array(z.unknown()),
    userAddresses: z.array(z.unknown()),
    ReportChangeLog: z.array(z.unknown()),
    Notification: z.array(z.unknown()),
    posts: z.array(z.unknown())
}).strict();

export type UserModelType = z.infer<typeof UserModelSchema>;
