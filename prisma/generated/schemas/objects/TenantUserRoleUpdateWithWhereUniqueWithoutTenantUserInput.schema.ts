import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUpdateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedUpdateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedUpdateWithoutTenantUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantUserRoleUpdateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateWithoutTenantUserInputObjectSchema)])
}).strict();
export const TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInput>;
export const TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInputObjectZodSchema = makeSchema();
