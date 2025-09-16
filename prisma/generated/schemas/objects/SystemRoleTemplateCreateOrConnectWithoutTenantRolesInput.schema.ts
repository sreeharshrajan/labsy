import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema)])
}).strict();
export const SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateOrConnectWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateOrConnectWithoutTenantRolesInput>;
export const SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectZodSchema = makeSchema();
