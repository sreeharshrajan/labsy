import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressScalarWhereInputObjectSchema } from './UserAddressScalarWhereInput.schema';
import { UserAddressUpdateManyMutationInputObjectSchema } from './UserAddressUpdateManyMutationInput.schema';
import { UserAddressUncheckedUpdateManyWithoutAddressInputObjectSchema } from './UserAddressUncheckedUpdateManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserAddressUpdateManyMutationInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateManyWithoutAddressInputObjectSchema)])
}).strict();
export const UserAddressUpdateManyWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateManyWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateManyWithWhereWithoutAddressInput>;
export const UserAddressUpdateManyWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
