import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateWithoutTenantUserInput.schema';
import { TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutTenantUserInput.schema';
import { TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema } from './TenantUserRoleCreateOrConnectWithoutTenantUserInput.schema';
import { TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInputObjectSchema } from './TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInput.schema';
import { TenantUserRoleCreateManyTenantUserInputEnvelopeObjectSchema } from './TenantUserRoleCreateManyTenantUserInputEnvelope.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInputObjectSchema } from './TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInput.schema';
import { TenantUserRoleUpdateManyWithWhereWithoutTenantUserInputObjectSchema } from './TenantUserRoleUpdateManyWithWhereWithoutTenantUserInput.schema';
import { TenantUserRoleScalarWhereInputObjectSchema } from './TenantUserRoleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleCreateWithoutTenantUserInputObjectSchema).array(), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutTenantUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleCreateOrConnectWithoutTenantUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUpsertWithWhereUniqueWithoutTenantUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserRoleCreateManyTenantUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUpdateWithWhereUniqueWithoutTenantUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantUserRoleUpdateManyWithWhereWithoutTenantUserInputObjectSchema), z.lazy(() => TenantUserRoleUpdateManyWithWhereWithoutTenantUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInput>;
export const TenantUserRoleUncheckedUpdateManyWithoutTenantUserNestedInputObjectZodSchema = makeSchema();
