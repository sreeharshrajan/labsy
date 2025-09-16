import { z } from 'zod';
import { AppSettingSelectObjectSchema } from './objects/AppSettingSelect.schema';
import { AppSettingIncludeObjectSchema } from './objects/AppSettingInclude.schema';
import { AppSettingCreateInputObjectSchema } from './objects/AppSettingCreateInput.schema';
import { AppSettingUncheckedCreateInputObjectSchema } from './objects/AppSettingUncheckedCreateInput.schema';

export const AppSettingCreateOneSchema = z.object({ select: AppSettingSelectObjectSchema.optional(), include: AppSettingIncludeObjectSchema.optional(), data: z.union([AppSettingCreateInputObjectSchema, AppSettingUncheckedCreateInputObjectSchema])  })