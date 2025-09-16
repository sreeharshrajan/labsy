import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionScalarWhereInputObjectSchema } from './SystemPermissionScalarWhereInput.schema';
import { SystemPermissionUpdateManyMutationInputObjectSchema } from './SystemPermissionUpdateManyMutationInput.schema';
import { SystemPermissionUncheckedUpdateManyWithoutRoleTemplateInputObjectSchema } from './SystemPermissionUncheckedUpdateManyWithoutRoleTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SystemPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SystemPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => SystemPermissionUncheckedUpdateManyWithoutRoleTemplateInputObjectSchema)])
}).strict();
export const SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInput>;
export const SystemPermissionUpdateManyWithWhereWithoutRoleTemplateInputObjectZodSchema = makeSchema();
