import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionWhereUniqueInputObjectSchema } from './TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionCreateWithoutRoleInputObjectSchema } from './TenantPermissionCreateWithoutRoleInput.schema';
import { TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateOrConnectWithoutRoleInput>;
export const TenantPermissionCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
