import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueUpdateInputObjectSchema } from './objects/AppSettingValueUpdateInput.schema';
import { AppSettingValueUncheckedUpdateInputObjectSchema } from './objects/AppSettingValueUncheckedUpdateInput.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';

export const AppSettingValueUpdateOneSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), data: z.union([AppSettingValueUpdateInputObjectSchema, AppSettingValueUncheckedUpdateInputObjectSchema]), where: AppSettingValueWhereUniqueInputObjectSchema  })