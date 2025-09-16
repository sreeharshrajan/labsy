import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigUpdateInputObjectSchema } from './objects/AppConfigUpdateInput.schema';
import { AppConfigUncheckedUpdateInputObjectSchema } from './objects/AppConfigUncheckedUpdateInput.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';

export const AppConfigUpdateOneSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  data: z.union([AppConfigUpdateInputObjectSchema, AppConfigUncheckedUpdateInputObjectSchema]), where: AppConfigWhereUniqueInputObjectSchema  })