import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUpdateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutPermissionsInput.schema';
import { TenantRoleCreateWithoutPermissionsInputObjectSchema } from './TenantRoleCreateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedCreateWithoutPermissionsInput.schema';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantRoleUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => TenantRoleWhereInputObjectSchema).optional()
}).strict();
export const TenantRoleUpsertWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleUpsertWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpsertWithoutPermissionsInput>;
export const TenantRoleUpsertWithoutPermissionsInputObjectZodSchema = makeSchema();
