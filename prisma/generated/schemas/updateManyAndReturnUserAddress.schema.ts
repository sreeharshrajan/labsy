import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressUpdateManyMutationInputObjectSchema } from './objects/UserAddressUpdateManyMutationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';

export const UserAddressUpdateManyAndReturnSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), data: UserAddressUpdateManyMutationInputObjectSchema, where: UserAddressWhereInputObjectSchema.optional()  }).strict()