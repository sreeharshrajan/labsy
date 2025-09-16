import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleCreateWithoutTenantInputObjectSchema } from './TenantRoleCreateWithoutTenantInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantRoleCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutTenantInput>;
export const TenantRoleCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
