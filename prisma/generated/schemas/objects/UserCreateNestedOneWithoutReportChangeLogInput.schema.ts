import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutReportChangeLogInputObjectSchema } from './UserCreateWithoutReportChangeLogInput.schema';
import { UserUncheckedCreateWithoutReportChangeLogInputObjectSchema } from './UserUncheckedCreateWithoutReportChangeLogInput.schema';
import { UserCreateOrConnectWithoutReportChangeLogInputObjectSchema } from './UserCreateOrConnectWithoutReportChangeLogInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportChangeLogInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportChangeLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportChangeLogInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReportChangeLogInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReportChangeLogInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReportChangeLogInput>;
export const UserCreateNestedOneWithoutReportChangeLogInputObjectZodSchema = makeSchema();
