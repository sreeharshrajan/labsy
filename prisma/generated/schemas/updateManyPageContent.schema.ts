import { z } from 'zod';
import { PageContentUpdateManyMutationInputObjectSchema } from './objects/PageContentUpdateManyMutationInput.schema';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';

export const PageContentUpdateManySchema = z.object({ data: PageContentUpdateManyMutationInputObjectSchema, where: PageContentWhereInputObjectSchema.optional()  })