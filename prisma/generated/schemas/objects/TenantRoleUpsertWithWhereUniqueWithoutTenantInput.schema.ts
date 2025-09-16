import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithoutTenantInputObjectSchema } from './TenantRoleUpdateWithoutTenantInput.schema';
import { TenantRoleUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedUpdateWithoutTenantInput.schema';
import { TenantRoleCreateWithoutTenantInputObjectSchema } from './TenantRoleCreateWithoutTenantInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantRoleUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantRoleUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUpsertWithWhereUniqueWithoutTenantInput>;
export const TenantRoleUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
