import { z } from 'zod';
import { PageSelectObjectSchema } from './objects/PageSelect.schema';
import { PageCreateManyInputObjectSchema } from './objects/PageCreateManyInput.schema';

export const PageCreateManyAndReturnSchema = z.object({ select: PageSelectObjectSchema.optional(), data: z.union([ PageCreateManyInputObjectSchema, z.array(PageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()