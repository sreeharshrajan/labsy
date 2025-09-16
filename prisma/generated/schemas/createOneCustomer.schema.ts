import { z } from 'zod';
import { CustomerSelectObjectSchema } from './objects/CustomerSelect.schema';
import { CustomerIncludeObjectSchema } from './objects/CustomerInclude.schema';
import { CustomerCreateInputObjectSchema } from './objects/CustomerCreateInput.schema';
import { CustomerUncheckedCreateInputObjectSchema } from './objects/CustomerUncheckedCreateInput.schema';

export const CustomerCreateOneSchema = z.object({ select: CustomerSelectObjectSchema.optional(), include: CustomerIncludeObjectSchema.optional(), data: z.union([CustomerCreateInputObjectSchema, CustomerUncheckedCreateInputObjectSchema])  })