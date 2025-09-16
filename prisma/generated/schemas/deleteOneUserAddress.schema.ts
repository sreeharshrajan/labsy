import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressDeleteOneSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema  })