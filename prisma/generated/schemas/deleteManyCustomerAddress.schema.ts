import { z } from 'zod';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';

export const CustomerAddressDeleteManySchema = z.object({ where: CustomerAddressWhereInputObjectSchema.optional()  })