import { z } from 'zod';
import { AppSettingValueCreateManyInputObjectSchema } from './objects/AppSettingValueCreateManyInput.schema';

export const AppSettingValueCreateManySchema = z.object({ data: z.union([ AppSettingValueCreateManyInputObjectSchema, z.array(AppSettingValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })