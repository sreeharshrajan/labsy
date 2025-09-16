import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUpdateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema)])
}).strict();
export const SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInput>;
export const SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInputObjectZodSchema = makeSchema();
