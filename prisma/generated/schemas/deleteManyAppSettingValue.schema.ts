import { z } from 'zod';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';

export const AppSettingValueDeleteManySchema = z.object({ where: AppSettingValueWhereInputObjectSchema.optional()  })