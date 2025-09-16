import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentCreateManyInputObjectSchema } from './objects/PageContentCreateManyInput.schema';

export const PageContentCreateManyAndReturnSchema = z.object({ select: PageContentSelectObjectSchema.optional(), data: z.union([ PageContentCreateManyInputObjectSchema, z.array(PageContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()