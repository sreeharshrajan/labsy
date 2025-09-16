import { z } from 'zod';
import { UserAddressSelectObjectSchema } from './objects/UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';
import { UserAddressCreateInputObjectSchema } from './objects/UserAddressCreateInput.schema';
import { UserAddressUncheckedCreateInputObjectSchema } from './objects/UserAddressUncheckedCreateInput.schema';
import { UserAddressUpdateInputObjectSchema } from './objects/UserAddressUpdateInput.schema';
import { UserAddressUncheckedUpdateInputObjectSchema } from './objects/UserAddressUncheckedUpdateInput.schema';

export const UserAddressUpsertSchema = z.object({ select: UserAddressSelectObjectSchema.optional(), include: UserAddressIncludeObjectSchema.optional(), where: UserAddressWhereUniqueInputObjectSchema, create: z.union([ UserAddressCreateInputObjectSchema, UserAddressUncheckedCreateInputObjectSchema ]), update: z.union([ UserAddressUpdateInputObjectSchema, UserAddressUncheckedUpdateInputObjectSchema ])  })