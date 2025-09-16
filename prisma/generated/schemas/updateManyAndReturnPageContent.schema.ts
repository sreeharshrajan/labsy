import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentUpdateManyMutationInputObjectSchema } from './objects/PageContentUpdateManyMutationInput.schema';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';

export const PageContentUpdateManyAndReturnSchema = z.object({ select: PageContentSelectObjectSchema.optional(), data: PageContentUpdateManyMutationInputObjectSchema, where: PageContentWhereInputObjectSchema.optional()  }).strict()