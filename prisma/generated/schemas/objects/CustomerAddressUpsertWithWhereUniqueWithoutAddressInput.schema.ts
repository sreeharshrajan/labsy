import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithoutAddressInputObjectSchema } from './CustomerAddressUpdateWithoutAddressInput.schema';
import { CustomerAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutAddressInput.schema';
import { CustomerAddressCreateWithoutAddressInputObjectSchema } from './CustomerAddressCreateWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomerAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const CustomerAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpsertWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpsertWithWhereUniqueWithoutAddressInput>;
export const CustomerAddressUpsertWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
