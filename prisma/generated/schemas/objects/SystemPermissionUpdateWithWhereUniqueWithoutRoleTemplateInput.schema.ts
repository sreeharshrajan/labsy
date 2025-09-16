import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionWhereUniqueInputObjectSchema } from './SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionUpdateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUpdateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedUpdateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedUpdateWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SystemPermissionUpdateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedUpdateWithoutRoleTemplateInputObjectSchema)])
}).strict();
export const SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInput>;
export const SystemPermissionUpdateWithWhereUniqueWithoutRoleTemplateInputObjectZodSchema = makeSchema();
