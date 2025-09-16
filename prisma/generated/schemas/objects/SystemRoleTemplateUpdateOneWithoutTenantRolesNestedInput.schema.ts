import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateCreateOrConnectWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUpsertWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUpsertWithoutTenantRolesInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUpdateWithoutTenantRolesInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutTenantRolesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SystemRoleTemplateCreateOrConnectWithoutTenantRolesInputObjectSchema).optional(),
  upsert: z.lazy(() => SystemRoleTemplateUpsertWithoutTenantRolesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SystemRoleTemplateUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutTenantRolesInputObjectSchema)]).optional()
}).strict();
export const SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInput>;
export const SystemRoleTemplateUpdateOneWithoutTenantRolesNestedInputObjectZodSchema = makeSchema();
