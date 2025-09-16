import { z } from 'zod';
import { CustomerAddressCreateManyInputObjectSchema } from './objects/CustomerAddressCreateManyInput.schema';

export const CustomerAddressCreateManySchema = z.object({ data: z.union([ CustomerAddressCreateManyInputObjectSchema, z.array(CustomerAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })