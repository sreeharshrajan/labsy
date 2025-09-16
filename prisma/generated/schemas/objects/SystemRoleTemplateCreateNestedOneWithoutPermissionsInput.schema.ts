import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateOrConnectWithoutPermissionsInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateCreateNestedOneWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateNestedOneWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateNestedOneWithoutPermissionsInput>;
export const SystemRoleTemplateCreateNestedOneWithoutPermissionsInputObjectZodSchema = makeSchema();
