import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutUserInputObjectSchema } from './TenantUserCreateWithoutUserInput.schema';
import { TenantUserUncheckedCreateWithoutUserInputObjectSchema } from './TenantUserUncheckedCreateWithoutUserInput.schema';
import { TenantUserCreateOrConnectWithoutUserInputObjectSchema } from './TenantUserCreateOrConnectWithoutUserInput.schema';
import { TenantUserUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TenantUserUpsertWithWhereUniqueWithoutUserInput.schema';
import { TenantUserCreateManyUserInputEnvelopeObjectSchema } from './TenantUserCreateManyUserInputEnvelope.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TenantUserUpdateWithWhereUniqueWithoutUserInput.schema';
import { TenantUserUpdateManyWithWhereWithoutUserInputObjectSchema } from './TenantUserUpdateManyWithWhereWithoutUserInput.schema';
import { TenantUserScalarWhereInputObjectSchema } from './TenantUserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantUserCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TenantUserCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantUserUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TenantUserUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantUserCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantUserWhereUniqueInputObjectSchema), z.lazy(() => TenantUserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TenantUserUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantUserUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TenantUserUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantUserScalarWhereInputObjectSchema), z.lazy(() => TenantUserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantUserUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateManyWithoutUserNestedInput>;
export const TenantUserUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
