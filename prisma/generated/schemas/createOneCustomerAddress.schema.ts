import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressCreateInputObjectSchema } from './objects/CustomerAddressCreateInput.schema';
import { CustomerAddressUncheckedCreateInputObjectSchema } from './objects/CustomerAddressUncheckedCreateInput.schema';

export const CustomerAddressCreateOneSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), data: z.union([CustomerAddressCreateInputObjectSchema, CustomerAddressUncheckedCreateInputObjectSchema])  })