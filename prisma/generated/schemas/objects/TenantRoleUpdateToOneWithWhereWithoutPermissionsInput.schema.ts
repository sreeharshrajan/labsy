import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema';
import { TenantRoleUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUpdateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantRoleUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
export const TenantRoleUpdateToOneWithWhereWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateToOneWithWhereWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateToOneWithWhereWithoutPermissionsInput>;
export const TenantRoleUpdateToOneWithWhereWithoutPermissionsInputObjectZodSchema = makeSchema();
