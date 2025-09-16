import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigCreateManyInputObjectSchema } from './objects/AppConfigCreateManyInput.schema';

export const AppConfigCreateManyAndReturnSchema = z.object({ select: AppConfigSelectObjectSchema.optional(), data: z.union([ AppConfigCreateManyInputObjectSchema, z.array(AppConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()