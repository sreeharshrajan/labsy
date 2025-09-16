import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateWithoutAddressInputObjectSchema } from './UserAddressCreateWithoutAddressInput.schema';
import { UserAddressUncheckedCreateWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutAddressInput.schema';
import { UserAddressCreateOrConnectWithoutAddressInputObjectSchema } from './UserAddressCreateOrConnectWithoutAddressInput.schema';
import { UserAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema } from './UserAddressUpsertWithWhereUniqueWithoutAddressInput.schema';
import { UserAddressCreateManyAddressInputEnvelopeObjectSchema } from './UserAddressCreateManyAddressInputEnvelope.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema } from './UserAddressUpdateWithWhereUniqueWithoutAddressInput.schema';
import { UserAddressUpdateManyWithWhereWithoutAddressInputObjectSchema } from './UserAddressUpdateManyWithWhereWithoutAddressInput.schema';
import { UserAddressScalarWhereInputObjectSchema } from './UserAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => UserAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserAddressUpdateManyWithWhereWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUpdateManyWithWhereWithoutAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserAddressScalarWhereInputObjectSchema), z.lazy(() => UserAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedUpdateManyWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedUpdateManyWithoutAddressNestedInput>;
export const UserAddressUncheckedUpdateManyWithoutAddressNestedInputObjectZodSchema = makeSchema();
