import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutTenantUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema)])
}).strict();
export const TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateOrConnectWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateOrConnectWithoutTenantUserInput>;
export const TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectZodSchema = makeSchema();
