import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserTitleFilterObjectSchema } from './EnumUserTitleFilter.schema';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumUserStatusFilterObjectSchema } from './EnumUserStatusFilter.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantUserListRelationFilterObjectSchema } from './TenantUserListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { AuditLogListRelationFilterObjectSchema } from './AuditLogListRelationFilter.schema';
import { UserAddressListRelationFilterObjectSchema } from './UserAddressListRelationFilter.schema';
import { ReportChangeLogListRelationFilterObjectSchema } from './ReportChangeLogListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userTitle: z.union([z.lazy(() => EnumUserTitleFilterObjectSchema), UserTitleSchema]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  passwordHash: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isSuperAdmin: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumUserStatusFilterObjectSchema), UserStatusSchema]).optional(),
  dateOfBirth: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tenants: z.lazy(() => TenantUserListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogListRelationFilterObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressListRelationFilterObjectSchema).optional(),
  ReportChangeLog: z.lazy(() => ReportChangeLogListRelationFilterObjectSchema).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  posts: z.lazy(() => PostListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
