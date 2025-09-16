import { z } from 'zod';
import { AppConfigCreateManyInputObjectSchema } from './objects/AppConfigCreateManyInput.schema';

export const AppConfigCreateManySchema = z.object({ data: z.union([ AppConfigCreateManyInputObjectSchema, z.array(AppConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })