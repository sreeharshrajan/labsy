import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressCreateInputObjectSchema } from './objects/UserAddressCreateInput.schema';
import { UserAddressUncheckedCreateInputObjectSchema } from './objects/UserAddressUncheckedCreateInput.schema';

export const UserAddressCreateOneSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), data: z.union([UserAddressCreateInputObjectSchema, UserAddressUncheckedCreateInputObjectSchema])  })