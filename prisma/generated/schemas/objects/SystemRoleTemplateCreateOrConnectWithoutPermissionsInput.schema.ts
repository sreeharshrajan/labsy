import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
export const SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateOrConnectWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateOrConnectWithoutPermissionsInput>;
export const SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectZodSchema = makeSchema();
