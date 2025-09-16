import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionWhereUniqueInputObjectSchema } from './TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionUpdateWithoutRoleInputObjectSchema } from './TenantPermissionUpdateWithoutRoleInput.schema';
import { TenantPermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedUpdateWithoutRoleInput.schema';
import { TenantPermissionCreateWithoutRoleInputObjectSchema } from './TenantPermissionCreateWithoutRoleInput.schema';
import { TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantPermissionUpdateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionUpsertWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUpsertWithWhereUniqueWithoutRoleInput>;
export const TenantPermissionUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
