import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingOrderByWithRelationInputObjectSchema } from './objects/AppSettingOrderByWithRelationInput.schema';
import { AppSettingWhereInputObjectSchema } from './objects/AppSettingWhereInput.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './objects/AppSettingWhereUniqueInput.schema';
import { AppSettingCountAggregateInputObjectSchema } from './objects/AppSettingCountAggregateInput.schema';
import { AppSettingMinAggregateInputObjectSchema } from './objects/AppSettingMinAggregateInput.schema';
import { AppSettingMaxAggregateInputObjectSchema } from './objects/AppSettingMaxAggregateInput.schema';

export const AppSettingAggregateSchema: z.ZodType<Prisma.AppSettingAggregateArgs> = z.object({ orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional(), _min: AppSettingMinAggregateInputObjectSchema.optional(), _max: AppSettingMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingAggregateArgs>;

export const AppSettingAggregateZodSchema = z.object({ orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional(), _min: AppSettingMinAggregateInputObjectSchema.optional(), _max: AppSettingMaxAggregateInputObjectSchema.optional() }).strict();