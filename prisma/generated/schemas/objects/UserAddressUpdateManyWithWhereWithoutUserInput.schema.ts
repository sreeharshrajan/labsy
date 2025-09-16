import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressScalarWhereInputObjectSchema } from './UserAddressScalarWhereInput.schema';
import { UserAddressUpdateManyMutationInputObjectSchema } from './UserAddressUpdateManyMutationInput.schema';
import { UserAddressUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserAddressUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserAddressUpdateManyMutationInputObjectSchema), z.lazy(() => UserAddressUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserAddressUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateManyWithWhereWithoutUserInput>;
export const UserAddressUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
