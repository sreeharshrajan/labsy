import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedCreateWithoutPermissionsInput.schema';
import { SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateOrConnectWithoutPermissionsInput.schema';
import { SystemRoleTemplateUpsertWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUpsertWithoutPermissionsInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInput.schema';
import { SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUpdateWithoutPermissionsInput.schema';
import { SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateUncheckedUpdateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SystemRoleTemplateCreateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SystemRoleTemplateCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => SystemRoleTemplateUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => SystemRoleTemplateWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SystemRoleTemplateUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => SystemRoleTemplateUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
export const SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInput>;
export const SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInputObjectZodSchema = makeSchema();
