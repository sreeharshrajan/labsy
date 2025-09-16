import { z } from 'zod';
import { AppConfigUpdateManyMutationInputObjectSchema } from './objects/AppConfigUpdateManyMutationInput.schema';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';

export const AppConfigUpdateManySchema = z.object({ data: AppConfigUpdateManyMutationInputObjectSchema, where: AppConfigWhereInputObjectSchema.optional()  })