import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingWhereInputObjectSchema } from './objects/AppSettingWhereInput.schema';
import { AppSettingOrderByWithAggregationInputObjectSchema } from './objects/AppSettingOrderByWithAggregationInput.schema';
import { AppSettingScalarWhereWithAggregatesInputObjectSchema } from './objects/AppSettingScalarWhereWithAggregatesInput.schema';
import { AppSettingScalarFieldEnumSchema } from './enums/AppSettingScalarFieldEnum.schema';
import { AppSettingCountAggregateInputObjectSchema } from './objects/AppSettingCountAggregateInput.schema';
import { AppSettingMinAggregateInputObjectSchema } from './objects/AppSettingMinAggregateInput.schema';
import { AppSettingMaxAggregateInputObjectSchema } from './objects/AppSettingMaxAggregateInput.schema';

export const AppSettingGroupBySchema: z.ZodType<Prisma.AppSettingGroupByArgs> = z.object({ where: AppSettingWhereInputObjectSchema.optional(), orderBy: z.union([AppSettingOrderByWithAggregationInputObjectSchema, AppSettingOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppSettingScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppSettingScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional(), _min: AppSettingMinAggregateInputObjectSchema.optional(), _max: AppSettingMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingGroupByArgs>;

export const AppSettingGroupByZodSchema = z.object({ where: AppSettingWhereInputObjectSchema.optional(), orderBy: z.union([AppSettingOrderByWithAggregationInputObjectSchema, AppSettingOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppSettingScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppSettingScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional(), _min: AppSettingMinAggregateInputObjectSchema.optional(), _max: AppSettingMaxAggregateInputObjectSchema.optional() }).strict();