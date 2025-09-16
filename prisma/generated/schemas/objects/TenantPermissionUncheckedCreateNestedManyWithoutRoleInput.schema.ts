import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateWithoutRoleInputObjectSchema } from './TenantPermissionCreateWithoutRoleInput.schema';
import { TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateWithoutRoleInput.schema';
import { TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema } from './TenantPermissionCreateOrConnectWithoutRoleInput.schema';
import { TenantPermissionCreateManyRoleInputEnvelopeObjectSchema } from './TenantPermissionCreateManyRoleInputEnvelope.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './TenantPermissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantPermissionCreateManyRoleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema), z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantPermissionUncheckedCreateNestedManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUncheckedCreateNestedManyWithoutRoleInput>;
export const TenantPermissionUncheckedCreateNestedManyWithoutRoleInputObjectZodSchema = makeSchema();
