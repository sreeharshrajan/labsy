import { z } from 'zod';
import { CustomerAddressSelectObjectSchema } from './objects/CustomerAddressSelect.schema';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';

export const CustomerAddressDeleteOneSchema = z.object({ select: CustomerAddressSelectObjectSchema.optional(), include: CustomerAddressIncludeObjectSchema.optional(), where: CustomerAddressWhereUniqueInputObjectSchema  })