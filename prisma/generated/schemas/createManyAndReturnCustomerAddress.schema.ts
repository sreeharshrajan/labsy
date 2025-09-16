import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressCreateManyInputObjectSchema } from './objects/CustomerAddressCreateManyInput.schema';

export const CustomerAddressCreateManyAndReturnSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), data: z.union([ CustomerAddressCreateManyInputObjectSchema, z.array(CustomerAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()