import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';
import { AppSettingValueOrderByWithAggregationInputObjectSchema } from './objects/AppSettingValueOrderByWithAggregationInput.schema';
import { AppSettingValueScalarWhereWithAggregatesInputObjectSchema } from './objects/AppSettingValueScalarWhereWithAggregatesInput.schema';
import { AppSettingValueScalarFieldEnumSchema } from './enums/AppSettingValueScalarFieldEnum.schema';
import { AppSettingValueCountAggregateInputObjectSchema } from './objects/AppSettingValueCountAggregateInput.schema';
import { AppSettingValueMinAggregateInputObjectSchema } from './objects/AppSettingValueMinAggregateInput.schema';
import { AppSettingValueMaxAggregateInputObjectSchema } from './objects/AppSettingValueMaxAggregateInput.schema';

export const AppSettingValueGroupBySchema: z.ZodType<Prisma.AppSettingValueGroupByArgs> = z.object({ where: AppSettingValueWhereInputObjectSchema.optional(), orderBy: z.union([AppSettingValueOrderByWithAggregationInputObjectSchema, AppSettingValueOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppSettingValueScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppSettingValueScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional(), _min: AppSettingValueMinAggregateInputObjectSchema.optional(), _max: AppSettingValueMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingValueGroupByArgs>;

export const AppSettingValueGroupByZodSchema = z.object({ where: AppSettingValueWhereInputObjectSchema.optional(), orderBy: z.union([AppSettingValueOrderByWithAggregationInputObjectSchema, AppSettingValueOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppSettingValueScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppSettingValueScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional(), _min: AppSettingValueMinAggregateInputObjectSchema.optional(), _max: AppSettingValueMaxAggregateInputObjectSchema.optional() }).strict();