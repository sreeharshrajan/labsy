import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCreateWithoutAddressInputObjectSchema } from './CustomerAddressCreateWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutAddressInput>;
export const CustomerAddressCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
