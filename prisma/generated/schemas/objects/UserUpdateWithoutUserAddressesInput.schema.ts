import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { EnumUserTitleFieldUpdateOperationsInputObjectSchema } from './EnumUserTitleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUserUpdateManyWithoutUserNestedInputObjectSchema } from './TenantUserUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { AuditLogUpdateManyWithoutUserNestedInputObjectSchema } from './AuditLogUpdateManyWithoutUserNestedInput.schema';
import { ReportChangeLogUpdateManyWithoutUserNestedInputObjectSchema } from './ReportChangeLogUpdateManyWithoutUserNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema';
import { PostUpdateManyWithoutUserNestedInputObjectSchema } from './PostUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userTitle: z.union([UserTitleSchema, z.lazy(() => EnumUserTitleFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passwordHash: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isSuperAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  dateOfBirth: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenants: z.lazy(() => TenantUserUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ReportChangeLog: z.lazy(() => ReportChangeLogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  posts: z.lazy(() => PostUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutUserAddressesInput>;
export const UserUpdateWithoutUserAddressesInputObjectZodSchema = makeSchema();
