import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionWhereUniqueInputObjectSchema } from './SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionCreateWithoutRoleTemplateInput.schema';
import { SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedCreateWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SystemPermissionCreateWithoutRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema)])
}).strict();
export const SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionCreateOrConnectWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCreateOrConnectWithoutRoleTemplateInput>;
export const SystemPermissionCreateOrConnectWithoutRoleTemplateInputObjectZodSchema = makeSchema();
