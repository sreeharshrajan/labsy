import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutReportChangeLogInputObjectSchema } from './UserUpdateWithoutReportChangeLogInput.schema';
import { UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedUpdateWithoutReportChangeLogInput.schema';
import { UserCreateWithoutReportChangeLogInputObjectSchema } from './UserCreateWithoutReportChangeLogInput.schema';
import { UserUncheckedCreateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedCreateWithoutReportChangeLogInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportChangeLogInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReportChangeLogInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReportChangeLogInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReportChangeLogInput>;
export const UserUpsertWithoutReportChangeLogInputObjectZodSchema = makeSchema();
