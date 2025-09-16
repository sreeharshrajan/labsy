import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCreateWithoutCustomerInputObjectSchema } from './CustomerAddressCreateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput>;
export const CustomerAddressCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
