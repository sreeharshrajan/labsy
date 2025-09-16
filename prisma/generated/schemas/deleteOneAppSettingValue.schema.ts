import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';

export const AppSettingValueDeleteOneSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), where: AppSettingValueWhereUniqueInputObjectSchema  })