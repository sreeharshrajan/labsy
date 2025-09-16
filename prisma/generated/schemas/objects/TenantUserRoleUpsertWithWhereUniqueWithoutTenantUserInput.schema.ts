import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUpdateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedUpdateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedUpdateWithoutTenantUserInput.schema';
import { TenantUserRoleCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutTenantUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantUserRoleUpdateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateWithoutTenantUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema)])
}).strict();
export const TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInput>;
export const TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInputObjectZodSchema = makeSchema();
