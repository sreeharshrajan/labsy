import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressUpdateInputObjectSchema } from './objects/UserAddressUpdateInput.schema';
import { UserAddressUncheckedUpdateInputObjectSchema } from './objects/UserAddressUncheckedUpdateInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressUpdateOneSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), data: z.union([UserAddressUpdateInputObjectSchema, UserAddressUncheckedUpdateInputObjectSchema]), where: UserAddressWhereUniqueInputObjectSchema  })