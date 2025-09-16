import { z } from 'zod';
import { PageContentCreateManyInputObjectSchema } from './objects/PageContentCreateManyInput.schema';

export const PageContentCreateManySchema = z.object({ data: z.union([ PageContentCreateManyInputObjectSchema, z.array(PageContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })