import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutTenantInputObjectSchema } from './TenantUserCreateWithoutTenantInput.schema';
import { TenantUserUncheckedCreateWithoutTenantInputObjectSchema } from './TenantUserUncheckedCreateWithoutTenantInput.schema';
import { TenantUserCreateOrConnectWithoutTenantInputObjectSchema } from './TenantUserCreateOrConnectWithoutTenantInput.schema';
import { TenantUserUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantUserUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantUserCreateManyTenantInputEnvelopeObjectSchema } from './TenantUserCreateManyTenantInputEnvelope.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantUserUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantUserUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantUserUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantUserScalarWhereInputObjectSchema } from './TenantUserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantUserCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantUserUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantUserUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => TenantUserUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantUserScalarWhereInputObjectSchema), z.lazy(() => TenantUserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateManyWithoutTenantNestedInput>;
export const TenantUserUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
