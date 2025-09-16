import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionCreateWithoutRoleInputObjectSchema } from './TenantPermissionCreateWithoutRoleInput.schema';
import { TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './TenantPermissionUncheckedCreateWithoutRoleInput.schema';
import { TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema } from './TenantPermissionCreateOrConnectWithoutRoleInput.schema';
import { TenantPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './TenantPermissionUpsertWithWhereUniqueWithoutRoleInput.schema';
import { TenantPermissionCreateManyRoleInputEnvelopeObjectSchema } from './TenantPermissionCreateManyRoleInputEnvelope.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './TenantPermissionUpdateWithWhereUniqueWithoutRoleInput.schema';
import { TenantPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema } from './TenantPermissionUpdateManyWithWhereWithoutRoleInput.schema';
import { TenantPermissionScalarWhereInputObjectSchema } from './TenantPermissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantPermissionCreateManyRoleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema), z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema), z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema), z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema), z.lazy(() => TenantPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema), z.lazy(() => TenantPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantPermissionScalarWhereInputObjectSchema), z.lazy(() => TenantPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantPermissionUpdateManyWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.TenantPermissionUpdateManyWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUpdateManyWithoutRoleNestedInput>;
export const TenantPermissionUpdateManyWithoutRoleNestedInputObjectZodSchema = makeSchema();
