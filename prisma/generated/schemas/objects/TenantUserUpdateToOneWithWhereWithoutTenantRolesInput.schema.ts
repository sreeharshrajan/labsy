import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUpdateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedUpdateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutTenantRolesInputObjectSchema)])
}).strict();
export const TenantUserUpdateToOneWithWhereWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutTenantRolesInput>;
export const TenantUserUpdateToOneWithWhereWithoutTenantRolesInputObjectZodSchema = makeSchema();
