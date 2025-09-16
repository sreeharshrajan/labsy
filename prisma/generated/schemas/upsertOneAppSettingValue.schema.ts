import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueCreateInputObjectSchema } from './objects/AppSettingValueCreateInput.schema';
import { AppSettingValueUncheckedCreateInputObjectSchema } from './objects/AppSettingValueUncheckedCreateInput.schema';
import { AppSettingValueUpdateInputObjectSchema } from './objects/AppSettingValueUpdateInput.schema';
import { AppSettingValueUncheckedUpdateInputObjectSchema } from './objects/AppSettingValueUncheckedUpdateInput.schema';

export const AppSettingValueUpsertSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), where: AppSettingValueWhereUniqueInputObjectSchema, create: z.union([ AppSettingValueCreateInputObjectSchema, AppSettingValueUncheckedCreateInputObjectSchema ]), update: z.union([ AppSettingValueUpdateInputObjectSchema, AppSettingValueUncheckedUpdateInputObjectSchema ])  })