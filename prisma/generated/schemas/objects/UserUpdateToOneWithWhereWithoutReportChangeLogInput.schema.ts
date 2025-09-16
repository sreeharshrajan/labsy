import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReportChangeLogInputObjectSchema } from './UserUpdateWithoutReportChangeLogInput.schema';
import { UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedUpdateWithoutReportChangeLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportChangeLogInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReportChangeLogInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportChangeLogInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportChangeLogInput>;
export const UserUpdateToOneWithWhereWithoutReportChangeLogInputObjectZodSchema = makeSchema();
