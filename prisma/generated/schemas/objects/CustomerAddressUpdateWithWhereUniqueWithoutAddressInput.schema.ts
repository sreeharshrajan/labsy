import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithoutAddressInputObjectSchema } from './CustomerAddressUpdateWithoutAddressInput.schema';
import { CustomerAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomerAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const CustomerAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateWithWhereUniqueWithoutAddressInput>;
export const CustomerAddressUpdateWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
