import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithoutCustomerInputObjectSchema } from './CustomerAddressUpdateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedUpdateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomerAddressUpdateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const CustomerAddressUpdateWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput>;
export const CustomerAddressUpdateWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
