import { z } from 'zod';
import { AppSettingSelectObjectSchema } from './objects/AppSettingSelect.schema';
import { AppSettingCreateManyInputObjectSchema } from './objects/AppSettingCreateManyInput.schema';

export const AppSettingCreateManyAndReturnSchema = z.object({ select: AppSettingSelectObjectSchema.optional(), data: z.union([ AppSettingCreateManyInputObjectSchema, z.array(AppSettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()