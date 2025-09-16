import { z } from 'zod';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';

export const PageContentDeleteManySchema = z.object({ where: PageContentWhereInputObjectSchema.optional()  })