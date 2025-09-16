import { z } from 'zod';
import { CustomerSelectObjectSchema } from './objects/CustomerSelect.schema';
import { CustomerUpdateManyMutationInputObjectSchema } from './objects/CustomerUpdateManyMutationInput.schema';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';

export const CustomerUpdateManyAndReturnSchema = z.object({ select: CustomerSelectObjectSchema.optional(), data: CustomerUpdateManyMutationInputObjectSchema, where: CustomerWhereInputObjectSchema.optional()  }).strict()