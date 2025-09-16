import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantUserRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema)])
}).strict();
export const TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutTenantUserRoleInput>;
export const TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
