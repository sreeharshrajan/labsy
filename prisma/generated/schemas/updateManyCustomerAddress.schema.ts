import { z } from 'zod';
import { CustomerAddressUpdateManyMutationInputObjectSchema } from './objects/CustomerAddressUpdateManyMutationInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';

export const CustomerAddressUpdateManySchema = z.object({ data: CustomerAddressUpdateManyMutationInputObjectSchema, where: CustomerAddressWhereInputObjectSchema.optional()  })