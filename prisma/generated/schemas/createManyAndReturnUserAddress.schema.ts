import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressCreateManyInputObjectSchema } from './objects/UserAddressCreateManyInput.schema';

export const UserAddressCreateManyAndReturnSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), data: z.union([ UserAddressCreateManyInputObjectSchema, z.array(UserAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()