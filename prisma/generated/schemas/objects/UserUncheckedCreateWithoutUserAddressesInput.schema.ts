import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { TenantUserUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TenantUserUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { AuditLogUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AuditLogUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReportChangeLogUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { PostUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutUserInput.schema'

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
  tenants: z.lazy(() => TenantUserUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ReportChangeLog: z.lazy(() => ReportChangeLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutUserAddressesInput>;
export const UserUncheckedCreateWithoutUserAddressesInputObjectZodSchema = makeSchema();
