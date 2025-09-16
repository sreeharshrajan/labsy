import { z } from 'zod';
import { PageSelectObjectSchema } from './objects/PageSelect.schema';
import { PageUpdateManyMutationInputObjectSchema } from './objects/PageUpdateManyMutationInput.schema';
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema';

export const PageUpdateManyAndReturnSchema = z.object({ select: PageSelectObjectSchema.optional(), data: PageUpdateManyMutationInputObjectSchema, where: PageWhereInputObjectSchema.optional()  }).strict()