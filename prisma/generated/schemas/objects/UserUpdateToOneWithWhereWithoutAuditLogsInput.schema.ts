import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAuditLogsInputObjectSchema } from './UserUpdateWithoutAuditLogsInput.schema';
import { UserUncheckedUpdateWithoutAuditLogsInputObjectSchema } from './UserUncheckedUpdateWithoutAuditLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAuditLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAuditLogsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput>;
export const UserUpdateToOneWithWhereWithoutAuditLogsInputObjectZodSchema = makeSchema();
