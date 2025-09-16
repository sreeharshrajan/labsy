import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateWithoutAddressInputObjectSchema } from './UserAddressCreateWithoutAddressInput.schema';
import { UserAddressUncheckedCreateWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutAddressInput.schema';
import { UserAddressCreateOrConnectWithoutAddressInputObjectSchema } from './UserAddressCreateOrConnectWithoutAddressInput.schema';
import { UserAddressCreateManyAddressInputEnvelopeObjectSchema } from './UserAddressCreateManyAddressInputEnvelope.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => UserAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserAddressWhereUniqueInputObjectSchema), z.lazy(() => UserAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressUncheckedCreateNestedManyWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUncheckedCreateNestedManyWithoutAddressInput>;
export const UserAddressUncheckedCreateNestedManyWithoutAddressInputObjectZodSchema = makeSchema();
