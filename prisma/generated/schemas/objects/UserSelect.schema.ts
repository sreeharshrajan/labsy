import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserFindManySchema } from '../findManyTenantUser.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { AuditLogFindManySchema } from '../findManyAuditLog.schema';
import { UserAddressFindManySchema } from '../findManyUserAddress.schema';
import { ReportChangeLogFindManySchema } from '../findManyReportChangeLog.schema';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { PostFindManySchema } from '../findManyPost.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userTitle: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  image: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  phone: z.boolean().optional(),
  isSuperAdmin: z.boolean().optional(),
  status: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenants: z.union([z.boolean(), z.lazy(() => TenantUserFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  auditLogs: z.union([z.boolean(), z.lazy(() => AuditLogFindManySchema)]).optional(),
  userAddresses: z.union([z.boolean(), z.lazy(() => UserAddressFindManySchema)]).optional(),
  ReportChangeLog: z.union([z.boolean(), z.lazy(() => ReportChangeLogFindManySchema)]).optional(),
  Notification: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
