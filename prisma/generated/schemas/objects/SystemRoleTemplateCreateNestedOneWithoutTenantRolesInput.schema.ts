import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateOrConnectWithoutTenantRolesInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectSchema).optional(),
  connect: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCreateNestedOneWithoutTenantRolesInput>;
export const SystemRoleTemplateCreateNestedOneWithoutTenantRolesInputObjectZodSchema = makeSchema();
