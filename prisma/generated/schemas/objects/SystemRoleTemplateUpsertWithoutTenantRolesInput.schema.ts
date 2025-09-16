import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUpdateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema)]),
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema)]),
  where: z.lazy(() => SystemRoleTemplateWhereInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateUpsertWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpsertWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpsertWithoutTenantRolesInput>;
export const SystemRoleTemplateUpsertWithoutTenantRolesInputObjectZodSchema = makeSchema();
