import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionWhereUniqueInputObjectSchema } from './TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionUpdateWithoutRoleInputObjectSchema } from './TenantPermissionUpdateWithoutRoleInput.schema';
import { TenantPermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantPermissionUpdateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionUpdateWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUpdateWithWhereUniqueWithoutRoleInput>;
export const TenantPermissionUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
