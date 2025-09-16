import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReportChangeLogInputObjectSchema } from './UserCreateWithoutReportChangeLogInput.schema';
import { UserUncheckedCreateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedCreateWithoutReportChangeLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportChangeLogInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReportChangeLogInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReportChangeLogInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReportChangeLogInput>;
export const UserCreateOrConnectWithoutReportChangeLogInputObjectZodSchema = makeSchema();
