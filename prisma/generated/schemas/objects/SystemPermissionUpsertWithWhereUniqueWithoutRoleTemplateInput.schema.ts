import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionWhereUniqueInputObjectSchema } from './SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionUpdateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUpdateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedUpdateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedUpdateWithoutRoleTemplateInput.schema';
import { SystemPermissionCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SystemPermissionUpdateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedUpdateWithoutRoleTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema)])
}).strict();
export const SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInput>;
export const SystemPermissionUpsertWithWhereUniqueWithoutRoleTemplateInputObjectZodSchema = makeSchema();
