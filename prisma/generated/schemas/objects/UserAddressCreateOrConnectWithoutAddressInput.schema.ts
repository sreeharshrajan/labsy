import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressCreateWithoutAddressInputObjectSchema } from './UserAddressCreateWithoutAddressInput.schema';
import { UserAddressUncheckedCreateWithoutAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => UserAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const UserAddressCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateOrConnectWithoutAddressInput>;
export const UserAddressCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
