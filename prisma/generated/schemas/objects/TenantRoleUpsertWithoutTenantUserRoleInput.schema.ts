import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUpdateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutTenantUserRoleInput.schema';
import { TenantRoleCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema)]),
  where: z.lazy(() => TenantRoleWhereInputObjectSchema).optional()
}).strict();
export const TenantRoleUpsertWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleUpsertWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpsertWithoutTenantUserRoleInput>;
export const TenantRoleUpsertWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
