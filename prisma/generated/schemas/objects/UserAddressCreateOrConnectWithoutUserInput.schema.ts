import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressCreateWithoutUserInputObjectSchema } from './UserAddressCreateWithoutUserInput.schema';
import { UserAddressUncheckedCreateWithoutUserInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAddressCreateWithoutUserInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserAddressCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateOrConnectWithoutUserInput>;
export const UserAddressCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
