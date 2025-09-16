import { z } from 'zod';
import { AppSettingSelectObjectSchema } from './objects/AppSettingSelect.schema';
import { AppSettingUpdateManyMutationInputObjectSchema } from './objects/AppSettingUpdateManyMutationInput.schema';
import { AppSettingWhereInputObjectSchema } from './objects/AppSettingWhereInput.schema';

export const AppSettingUpdateManyAndReturnSchema = z.object({ select: AppSettingSelectObjectSchema.optional(), data: AppSettingUpdateManyMutationInputObjectSchema, where: AppSettingWhereInputObjectSchema.optional()  }).strict()