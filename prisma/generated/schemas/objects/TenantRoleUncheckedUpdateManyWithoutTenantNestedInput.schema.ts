import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateWithoutTenantInputObjectSchema } from './TenantRoleCreateWithoutTenantInput.schema';
import { TenantRoleUncheckedCreateWithoutTenantInputObjectSchema } from './TenantRoleUncheckedCreateWithoutTenantInput.schema';
import { TenantRoleCreateOrConnectWithoutTenantInputObjectSchema } from './TenantRoleCreateOrConnectWithoutTenantInput.schema';
import { TenantRoleUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantRoleUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantRoleCreateManyTenantInputEnvelopeObjectSchema } from './TenantRoleCreateManyTenantInputEnvelope.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './TenantRoleWhereUniqueInput.schema';
import { TenantRoleUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantRoleUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantRoleUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantRoleUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantRoleScalarWhereInputObjectSchema } from './TenantRoleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantRoleCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantRoleUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantRoleCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantRoleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantRoleUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantRoleUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => TenantRoleUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantRoleScalarWhereInputObjectSchema), z.lazy(() => TenantRoleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantRoleUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.TenantRoleUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleUncheckedUpdateManyWithoutTenantNestedInput>;
export const TenantRoleUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
