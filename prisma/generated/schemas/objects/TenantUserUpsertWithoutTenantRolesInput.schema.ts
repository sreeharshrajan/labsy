import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUpdateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutTenantRolesInput.schema';
import { TenantUserCreateWithoutTenantRolesInputObjectSchema } from './TenantUserCreateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantRolesInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUserUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema)]),
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserUpsertWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithoutTenantRolesInput>;
export const TenantUserUpsertWithoutTenantRolesInputObjectZodSchema = makeSchema();
