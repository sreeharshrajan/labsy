import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUpdateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
export const SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInput>;
export const SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInputObjectZodSchema = makeSchema();
