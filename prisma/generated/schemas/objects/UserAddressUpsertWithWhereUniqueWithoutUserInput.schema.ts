import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithoutUserInputObjectSchema } from './UserAddressUpdateWithoutUserInput.schema';
import { UserAddressUncheckedUpdateWithoutUserInputObjectSchema } from './UserAddressUncheckedUpdateWithoutUserInput.schema';
import { UserAddressCreateWithoutUserInputObjectSchema } from './UserAddressCreateWithoutUserInput.schema';
import { UserAddressUncheckedCreateWithoutUserInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserAddressUpdateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserAddressUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpsertWithWhereUniqueWithoutUserInput>;
export const UserAddressUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
