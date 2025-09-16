import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressScalarWhereInputObjectSchema } from './CustomerAddressScalarWhereInput.schema';
import { CustomerAddressUpdateManyMutationInputObjectSchema } from './CustomerAddressUpdateManyMutationInput.schema';
import { CustomerAddressUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedUpdateManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomerAddressUpdateManyMutationInputObjectSchema), z.lazy(() => CustomerAddressUncheckedUpdateManyWithoutCustomerInputObjectSchema)])
}).strict();
export const CustomerAddressUpdateManyWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput>;
export const CustomerAddressUpdateManyWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
