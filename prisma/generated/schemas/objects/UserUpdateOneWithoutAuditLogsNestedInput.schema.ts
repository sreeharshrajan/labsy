import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutAuditLogsInputObjectSchema } from './UserCreateWithoutAuditLogsInput.schema';
import { UserUncheckedCreateWithoutAuditLogsInputObjectSchema } from './UserUncheckedCreateWithoutAuditLogsInput.schema';
import { UserCreateOrConnectWithoutAuditLogsInputObjectSchema } from './UserCreateOrConnectWithoutAuditLogsInput.schema';
import { UserUpsertWithoutAuditLogsInputObjectSchema } from './UserUpsertWithoutAuditLogsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAuditLogsInput.schema';
import { UserUpdateWithoutAuditLogsInputObjectSchema } from './UserUpdateWithoutAuditLogsInput.schema';
import { UserUncheckedUpdateWithoutAuditLogsInputObjectSchema } from './UserUncheckedUpdateWithoutAuditLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAuditLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAuditLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuditLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuditLogsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema), z.lazy(() => UserUpdateWithoutAuditLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAuditLogsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutAuditLogsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAuditLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutAuditLogsNestedInput>;
export const UserUpdateOneWithoutAuditLogsNestedInputObjectZodSchema = makeSchema();
