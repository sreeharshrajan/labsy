import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingValueOrderByWithRelationInputObjectSchema } from './objects/AppSettingValueOrderByWithRelationInput.schema';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueCountAggregateInputObjectSchema } from './objects/AppSettingValueCountAggregateInput.schema';
import { AppSettingValueMinAggregateInputObjectSchema } from './objects/AppSettingValueMinAggregateInput.schema';
import { AppSettingValueMaxAggregateInputObjectSchema } from './objects/AppSettingValueMaxAggregateInput.schema';

export const AppSettingValueAggregateSchema: z.ZodType<Prisma.AppSettingValueAggregateArgs> = z.object({ orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional(), _min: AppSettingValueMinAggregateInputObjectSchema.optional(), _max: AppSettingValueMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingValueAggregateArgs>;

export const AppSettingValueAggregateZodSchema = z.object({ orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional(), _min: AppSettingValueMinAggregateInputObjectSchema.optional(), _max: AppSettingValueMaxAggregateInputObjectSchema.optional() }).strict();