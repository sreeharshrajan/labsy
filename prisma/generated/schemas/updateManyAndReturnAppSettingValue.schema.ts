import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueUpdateManyMutationInputObjectSchema } from './objects/AppSettingValueUpdateManyMutationInput.schema';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';

export const AppSettingValueUpdateManyAndReturnSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), data: AppSettingValueUpdateManyMutationInputObjectSchema, where: AppSettingValueWhereInputObjectSchema.optional()  }).strict()