import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithoutRoleInputObjectSchema } from './TenantUserRoleUpdateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserRoleUpdateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantUserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateWithWhereUniqueWithoutRoleInput>;
export const TenantUserRoleUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
