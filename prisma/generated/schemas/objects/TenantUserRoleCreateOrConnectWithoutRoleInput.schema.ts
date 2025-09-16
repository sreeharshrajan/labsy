import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleCreateWithoutRoleInputObjectSchema } from './TenantUserRoleCreateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCreateOrConnectWithoutRoleInput>;
export const TenantUserRoleCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
