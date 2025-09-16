import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigOrderByWithRelationInputObjectSchema } from './objects/AppConfigOrderByWithRelationInput.schema';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';
import { AppConfigCountAggregateInputObjectSchema } from './objects/AppConfigCountAggregateInput.schema';

export const AppConfigCountSchema: z.ZodType<Prisma.AppConfigCountArgs> = z.object({ orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AppConfigCountArgs>;

export const AppConfigCountZodSchema = z.object({ orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional() }).strict();