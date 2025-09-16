import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressUpdateManyMutationInputObjectSchema } from './objects/CustomerAddressUpdateManyMutationInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';

export const CustomerAddressUpdateManyAndReturnSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), data: CustomerAddressUpdateManyMutationInputObjectSchema, where: CustomerAddressWhereInputObjectSchema.optional()  }).strict()