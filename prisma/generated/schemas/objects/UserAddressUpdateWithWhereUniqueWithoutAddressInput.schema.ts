import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithoutAddressInputObjectSchema } from './UserAddressUpdateWithoutAddressInput.schema';
import { UserAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './UserAddressUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const UserAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateWithWhereUniqueWithoutAddressInput>;
export const UserAddressUpdateWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
