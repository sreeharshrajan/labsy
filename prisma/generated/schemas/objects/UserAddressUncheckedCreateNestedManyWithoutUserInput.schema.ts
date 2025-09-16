import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateWithoutUserInputObjectSchema } from './UserAddressCreateWithoutUserInput.schema';
import { UserAddressUncheckedCreateWithoutUserInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserInput.schema';
import { UserAddressCreateOrConnectWithoutUserInputObjectSchema } from './UserAddressCreateOrConnectWithoutUserInput.schema';
import { UserAddressCreateManyUserInputEnvelopeObjectSchema } from './UserAddressCreateManyUserInputEnvelope.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserAddressCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserAddressCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserAddressCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserAddressUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput>;
export const UserAddressUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
