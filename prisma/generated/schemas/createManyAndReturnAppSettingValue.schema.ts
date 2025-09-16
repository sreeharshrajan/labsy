import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueCreateManyInputObjectSchema } from './objects/AppSettingValueCreateManyInput.schema';

export const AppSettingValueCreateManyAndReturnSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), data: z.union([ AppSettingValueCreateManyInputObjectSchema, z.array(AppSettingValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()