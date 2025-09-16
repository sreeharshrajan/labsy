import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserCreateWithoutTenantRolesInputObjectSchema } from './TenantUserCreateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantRolesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema)])
}).strict();
export const TenantUserCreateOrConnectWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.TenantUserCreateOrConnectWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateOrConnectWithoutTenantRolesInput>;
export const TenantUserCreateOrConnectWithoutTenantRolesInputObjectZodSchema = makeSchema();
