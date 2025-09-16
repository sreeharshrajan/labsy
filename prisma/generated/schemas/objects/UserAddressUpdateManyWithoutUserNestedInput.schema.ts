import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateWithoutUserInputObjectSchema } from './UserAddressCreateWithoutUserInput.schema';
import { UserAddressUncheckedCreateWithoutUserInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserInput.schema';
import { UserAddressCreateOrConnectWithoutUserInputObjectSchema } from './UserAddressCreateOrConnectWithoutUserInput.schema';
import { UserAddressUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserAddressUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserAddressCreateManyUserInputEnvelopeObjectSchema } from './UserAddressCreateManyUserInputEnvelope.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserAddressUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserAddressUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserAddressUpdateManyWithWhereWithoutUserInput.schema';
import { UserAddressScalarWhereInputObjectSchema } from './UserAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserAddressCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserAddressCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserAddressUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserAddressUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserAddressCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserAddressUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserAddressUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserAddressUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserAddressUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserAddressScalarWhereInputObjectSchema), z.lazy(() => UserAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserAddressUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateManyWithoutUserNestedInput>;
export const UserAddressUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
