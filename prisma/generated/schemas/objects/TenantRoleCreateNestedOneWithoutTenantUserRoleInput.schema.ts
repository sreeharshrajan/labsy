import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantUserRoleInput.schema';
import { TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectSchema } from './TenantRoleCreateOrConnectWithoutTenantUserRoleInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantUserRoleInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantUserRoleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantRoleCreateOrConnectWithoutTenantUserRoleInputObjectSchema).optional(),
  connect: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateNestedOneWithoutTenantUserRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateNestedOneWithoutTenantUserRoleInput>;
export const TenantRoleCreateNestedOneWithoutTenantUserRoleInputObjectZodSchema = makeSchema();
