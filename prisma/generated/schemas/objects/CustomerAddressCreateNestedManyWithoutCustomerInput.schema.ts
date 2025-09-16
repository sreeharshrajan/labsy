import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutCustomerInputObjectSchema } from './CustomerAddressCreateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutCustomerInput.schema';
import { CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutCustomerInput.schema';
import { CustomerAddressCreateManyCustomerInputEnvelopeObjectSchema } from './CustomerAddressCreateManyCustomerInputEnvelope.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerAddressCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerAddressCreateNestedManyWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateNestedManyWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateNestedManyWithoutCustomerInput>;
export const CustomerAddressCreateNestedManyWithoutCustomerInputObjectZodSchema = makeSchema();
