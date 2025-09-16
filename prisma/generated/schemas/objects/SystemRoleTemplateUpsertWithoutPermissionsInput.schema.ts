import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUpdateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutPermissionsInput.schema';
import { SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateUpsertWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpsertWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpsertWithoutPermissionsInput>;
export const SystemRoleTemplateUpsertWithoutPermissionsInputObjectZodSchema = makeSchema();
