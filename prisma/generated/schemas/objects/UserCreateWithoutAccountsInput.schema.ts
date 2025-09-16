import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { TenantUserCreateNestedManyWithoutUserInputObjectSchema } from './TenantUserCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AuditLogCreateNestedManyWithoutUserInputObjectSchema } from './AuditLogCreateNestedManyWithoutUserInput.schema';
import { UserAddressCreateNestedManyWithoutUserInputObjectSchema } from './UserAddressCreateNestedManyWithoutUserInput.schema';
import { ReportChangeLogCreateNestedManyWithoutUserInputObjectSchema } from './ReportChangeLogCreateNestedManyWithoutUserInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { PostCreateNestedManyWithoutUserInputObjectSchema } from './PostCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userTitle: UserTitleSchema.optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  image: z.string().optional().nullable(),
  passwordHash: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  isSuperAdmin: z.boolean().optional(),
  status: UserStatusSchema.optional(),
  dateOfBirth: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenants: z.lazy(() => TenantUserCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ReportChangeLog: z.lazy(() => ReportChangeLogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
