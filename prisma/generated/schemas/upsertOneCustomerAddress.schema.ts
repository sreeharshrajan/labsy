import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCreateInputObjectSchema } from './objects/CustomerAddressCreateInput.schema';
import { CustomerAddressUncheckedCreateInputObjectSchema } from './objects/CustomerAddressUncheckedCreateInput.schema';
import { CustomerAddressUpdateInputObjectSchema } from './objects/CustomerAddressUpdateInput.schema';
import { CustomerAddressUncheckedUpdateInputObjectSchema } from './objects/CustomerAddressUncheckedUpdateInput.schema';

export const CustomerAddressUpsertSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), where: CustomerAddressWhereUniqueInputObjectSchema, create: z.union([ CustomerAddressCreateInputObjectSchema, CustomerAddressUncheckedCreateInputObjectSchema ]), update: z.union([ CustomerAddressUpdateInputObjectSchema, CustomerAddressUncheckedUpdateInputObjectSchema ])  })