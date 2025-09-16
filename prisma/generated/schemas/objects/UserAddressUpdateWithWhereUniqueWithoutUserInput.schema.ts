import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithoutUserInputObjectSchema } from './UserAddressUpdateWithoutUserInput.schema';
import { UserAddressUncheckedUpdateWithoutUserInputObjectSchema } from './UserAddressUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserAddressUpdateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserAddressUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateWithWhereUniqueWithoutUserInput>;
export const UserAddressUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
