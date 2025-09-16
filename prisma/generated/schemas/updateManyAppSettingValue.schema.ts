import { z } from 'zod';
import { AppSettingValueUpdateManyMutationInputObjectSchema } from './objects/AppSettingValueUpdateManyMutationInput.schema';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';

export const AppSettingValueUpdateManySchema = z.object({ data: AppSettingValueUpdateManyMutationInputObjectSchema, where: AppSettingValueWhereInputObjectSchema.optional()  })