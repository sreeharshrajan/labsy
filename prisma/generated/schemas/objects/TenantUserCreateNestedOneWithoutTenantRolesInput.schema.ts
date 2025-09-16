import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutTenantRolesInputObjectSchema } from './TenantUserCreateWithoutTenantRolesInput.schema';
import { TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantRolesInput.schema';
import { TenantUserCreateOrConnectWithoutTenantRolesInputObjectSchema } from './TenantUserCreateOrConnectWithoutTenantRolesInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantRolesInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantRolesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutTenantRolesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantUserCreateNestedOneWithoutTenantRolesInputObjectSchema: z.ZodType<Prisma.TenantUserCreateNestedOneWithoutTenantRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateNestedOneWithoutTenantRolesInput>;
export const TenantUserCreateNestedOneWithoutTenantRolesInputObjectZodSchema = makeSchema();
