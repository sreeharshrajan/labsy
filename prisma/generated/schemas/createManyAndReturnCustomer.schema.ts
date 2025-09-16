import { z } from 'zod';
import { CustomerSelectObjectSchema } from './objects/CustomerSelect.schema';
import { CustomerCreateManyInputObjectSchema } from './objects/CustomerCreateManyInput.schema';

export const CustomerCreateManyAndReturnSchema = z.object({ select: CustomerSelectObjectSchema.optional(), data: z.union([ CustomerCreateManyInputObjectSchema, z.array(CustomerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()