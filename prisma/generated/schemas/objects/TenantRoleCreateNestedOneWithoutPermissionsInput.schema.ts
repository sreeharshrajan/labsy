import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutPermissionsInputObjectSchema } from './TenantRoleCreateWithoutPermissionsInput.schema';
import { TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './TenantRoleUncheckedCreateWithoutPermissionsInput.schema';
import { TenantRoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './TenantRoleCreateOrConnectWithoutPermissionsInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutPermissionsInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantRoleCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantRoleCreateNestedOneWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.TenantRoleCreateNestedOneWithoutPermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateNestedOneWithoutPermissionsInput>;
export const TenantRoleCreateNestedOneWithoutPermissionsInputObjectZodSchema = makeSchema();
