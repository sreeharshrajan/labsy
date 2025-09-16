import { z } from 'zod';
import { UserAddressCreateManyInputObjectSchema } from './objects/UserAddressCreateManyInput.schema';

export const UserAddressCreateManySchema = z.object({ data: z.union([ UserAddressCreateManyInputObjectSchema, z.array(UserAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })