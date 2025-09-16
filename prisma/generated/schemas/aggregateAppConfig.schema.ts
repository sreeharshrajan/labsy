import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigOrderByWithRelationInputObjectSchema } from './objects/AppConfigOrderByWithRelationInput.schema';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';
import { AppConfigCountAggregateInputObjectSchema } from './objects/AppConfigCountAggregateInput.schema';
import { AppConfigMinAggregateInputObjectSchema } from './objects/AppConfigMinAggregateInput.schema';
import { AppConfigMaxAggregateInputObjectSchema } from './objects/AppConfigMaxAggregateInput.schema';

export const AppConfigAggregateSchema: z.ZodType<Prisma.AppConfigAggregateArgs> = z.object({ orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional(), _min: AppConfigMinAggregateInputObjectSchema.optional(), _max: AppConfigMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppConfigAggregateArgs>;

export const AppConfigAggregateZodSchema = z.object({ orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional(), _min: AppConfigMinAggregateInputObjectSchema.optional(), _max: AppConfigMaxAggregateInputObjectSchema.optional() }).strict();