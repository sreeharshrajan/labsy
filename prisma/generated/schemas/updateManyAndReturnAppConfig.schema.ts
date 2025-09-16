import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigUpdateManyMutationInputObjectSchema } from './objects/AppConfigUpdateManyMutationInput.schema';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';

export const AppConfigUpdateManyAndReturnSchema = z.object({ select: AppConfigSelectObjectSchema.optional(), data: AppConfigUpdateManyMutationInputObjectSchema, where: AppConfigWhereInputObjectSchema.optional()  }).strict()