import { z } from 'zod';
import { CustomerCreateManyInputObjectSchema } from './objects/CustomerCreateManyInput.schema';

export const CustomerCreateManySchema = z.object({ data: z.union([ CustomerCreateManyInputObjectSchema, z.array(CustomerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })