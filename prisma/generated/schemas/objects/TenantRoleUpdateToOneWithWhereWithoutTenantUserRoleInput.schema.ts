import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema';
import { TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUpdateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutTenantUserRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantRoleUpdateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutTenantUserRoleInputObjectSchema)])
}).strict();
export const TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInput>;
export const TenantRoleUpdateToOneWithWhereWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
