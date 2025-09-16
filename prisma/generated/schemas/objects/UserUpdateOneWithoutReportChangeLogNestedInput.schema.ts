import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutReportChangeLogInputObjectSchema } from './UserCreateWithoutReportChangeLogInput.schema';
import { UserUncheckedCreateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedCreateWithoutReportChangeLogInput.schema';
import { UserCreateOrConnectWithoutReportChangeLogInputObjectSchema } from './UserCreateOrConnectWithoutReportChangeLogInput.schema';
import { UserUpsertWithoutReportChangeLogInputObjectSchema } from './UserUpsertWithoutReportChangeLogInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReportChangeLogInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReportChangeLogInput.schema';
import { UserUpdateWithoutReportChangeLogInputObjectSchema } from './UserUpdateWithoutReportChangeLogInput.schema';
import { UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedUpdateWithoutReportChangeLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportChangeLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportChangeLogInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReportChangeLogInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUpdateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutReportChangeLogNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutReportChangeLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutReportChangeLogNestedInput>;
export const UserUpdateOneWithoutReportChangeLogNestedInputObjectZodSchema = makeSchema();
