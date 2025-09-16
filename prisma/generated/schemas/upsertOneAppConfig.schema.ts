import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';
import { AppConfigCreateInputObjectSchema } from './objects/AppConfigCreateInput.schema';
import { AppConfigUncheckedCreateInputObjectSchema } from './objects/AppConfigUncheckedCreateInput.schema';
import { AppConfigUpdateInputObjectSchema } from './objects/AppConfigUpdateInput.schema';
import { AppConfigUncheckedUpdateInputObjectSchema } from './objects/AppConfigUncheckedUpdateInput.schema';

export const AppConfigUpsertSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema, create: z.union([ AppConfigCreateInputObjectSchema, AppConfigUncheckedCreateInputObjectSchema ]), update: z.union([ AppConfigUpdateInputObjectSchema, AppConfigUncheckedUpdateInputObjectSchema ])  })