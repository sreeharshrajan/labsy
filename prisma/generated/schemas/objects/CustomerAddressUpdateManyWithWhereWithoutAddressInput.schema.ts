import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressScalarWhereInputObjectSchema } from './CustomerAddressScalarWhereInput.schema';
import { CustomerAddressUpdateManyMutationInputObjectSchema } from './CustomerAddressUpdateManyMutationInput.schema';
import { CustomerAddressUncheckedUpdateManyWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedUpdateManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomerAddressUpdateManyMutationInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateManyWithoutAddressInputObjectSchema)])
}).strict();
export const CustomerAddressUpdateManyWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateManyWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateManyWithWhereWithoutAddressInput>;
export const CustomerAddressUpdateManyWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
