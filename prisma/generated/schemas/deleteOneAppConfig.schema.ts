import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';

export const AppConfigDeleteOneSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema  })