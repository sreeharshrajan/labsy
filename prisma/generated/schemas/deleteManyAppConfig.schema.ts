import { z } from 'zod';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';

export const AppConfigDeleteManySchema = z.object({ where: AppConfigWhereInputObjectSchema.optional()  })