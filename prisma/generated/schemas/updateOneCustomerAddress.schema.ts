import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressUpdateInputObjectSchema } from './objects/CustomerAddressUpdateInput.schema';
import { CustomerAddressUncheckedUpdateInputObjectSchema } from './objects/CustomerAddressUncheckedUpdateInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';

export const CustomerAddressUpdateOneSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), data: z.union([CustomerAddressUpdateInputObjectSchema, CustomerAddressUncheckedUpdateInputObjectSchema]), where: CustomerAddressWhereUniqueInputObjectSchema  })