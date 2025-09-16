import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleCreateWithoutPermissionsInputObjectSchema } from './TenantRoleCreateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedCreateWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantRoleCreateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
export const TenantRoleCreateOrConnectWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateOrConnectWithoutPermissionsInput>;
export const TenantRoleCreateOrConnectWithoutPermissionsInputObjectZodSchema = makeSchema();
