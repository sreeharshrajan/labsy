import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleCreateWithoutRoleInputObjectSchema } from './TenantUserRoleCreateWithoutRoleInput.schema';
import { TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema } from './TenantUserRoleUncheckedCreateWithoutRoleInput.schema';
import { TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema } from './TenantUserRoleCreateOrConnectWithoutRoleInput.schema';
import { TenantUserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './TenantUserRoleUpsertWithWhereUniqueWithoutRoleInput.schema';
import { TenantUserRoleCreateManyRoleInputEnvelopeObjectSchema } from './TenantUserRoleCreateManyRoleInputEnvelope.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './TenantUserRoleUpdateWithWhereUniqueWithoutRoleInput.schema';
import { TenantUserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema } from './TenantUserRoleUpdateManyWithWhereWithoutRoleInput.schema';
import { TenantUserRoleScalarWhereInputObjectSchema } from './TenantUserRoleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantUserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserRoleCreateManyRoleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema), z.lazy(() => TenantUserRoleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantUserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantUserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema), z.lazy(() => TenantUserRoleUpdateManyWithWhereWithoutRoleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutRoleNestedInput>;
export const TenantUserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectZodSchema = makeSchema();
