import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithoutRoleInputObjectSchema } from './TenantUserRoleUpdateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedUpdateWithoutRoleInput.schema';
import { TenantUserRoleCreateWithoutRoleInputObjectSchema } from './TenantUserRoleCreateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantUserRoleUpdateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const TenantUserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpsertWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpsertWithWhereUniqueWithoutRoleInput>;
export const TenantUserRoleUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
