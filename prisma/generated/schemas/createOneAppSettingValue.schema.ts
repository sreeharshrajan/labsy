import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueCreateInputObjectSchema } from './objects/AppSettingValueCreateInput.schema';
import { AppSettingValueUncheckedCreateInputObjectSchema } from './objects/AppSettingValueUncheckedCreateInput.schema';

export const AppSettingValueCreateOneSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), data: z.union([AppSettingValueCreateInputObjectSchema, AppSettingValueUncheckedCreateInputObjectSchema])  })