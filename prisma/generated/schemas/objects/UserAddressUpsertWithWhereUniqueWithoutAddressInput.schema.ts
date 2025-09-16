import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithoutAddressInputObjectSchema } from './UserAddressUpdateWithoutAddressInput.schema';
import { UserAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './UserAddressUncheckedUpdateWithoutAddressInput.schema';
import { UserAddressCreateWithoutAddressInputObjectSchema } from './UserAddressCreateWithoutAddressInput.schema';
import { UserAddressUncheckedCreateWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const UserAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressUpsertWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpsertWithWhereUniqueWithoutAddressInput>;
export const UserAddressUpsertWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
