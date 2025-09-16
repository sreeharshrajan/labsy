import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigCreateInputObjectSchema } from './objects/AppConfigCreateInput.schema';
import { AppConfigUncheckedCreateInputObjectSchema } from './objects/AppConfigUncheckedCreateInput.schema';

export const AppConfigCreateOneSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  data: z.union([AppConfigCreateInputObjectSchema, AppConfigUncheckedCreateInputObjectSchema])  })