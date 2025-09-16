import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithoutCustomerInputObjectSchema } from './CustomerAddressUpdateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedUpdateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutCustomerInput.schema';
import { CustomerAddressCreateWithoutCustomerInputObjectSchema } from './CustomerAddressCreateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomerAddressUpdateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const CustomerAddressUpsertWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput>;
export const CustomerAddressUpsertWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
