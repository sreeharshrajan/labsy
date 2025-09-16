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
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
