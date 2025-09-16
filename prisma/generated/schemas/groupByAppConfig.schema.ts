import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';
import { AppConfigOrderByWithAggregationInputObjectSchema } from './objects/AppConfigOrderByWithAggregationInput.schema';
import { AppConfigScalarWhereWithAggregatesInputObjectSchema } from './objects/AppConfigScalarWhereWithAggregatesInput.schema';
import { AppConfigScalarFieldEnumSchema } from './enums/AppConfigScalarFieldEnum.schema';
import { AppConfigCountAggregateInputObjectSchema } from './objects/AppConfigCountAggregateInput.schema';
import { AppConfigMinAggregateInputObjectSchema } from './objects/AppConfigMinAggregateInput.schema';
import { AppConfigMaxAggregateInputObjectSchema } from './objects/AppConfigMaxAggregateInput.schema';

export const AppConfigGroupBySchema: z.ZodType<Prisma.AppConfigGroupByArgs> = z.object({ where: AppConfigWhereInputObjectSchema.optional(), orderBy: z.union([AppConfigOrderByWithAggregationInputObjectSchema, AppConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppConfigScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional(), _min: AppConfigMinAggregateInputObjectSchema.optional(), _max: AppConfigMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppConfigGroupByArgs>;

export const AppConfigGroupByZodSchema = z.object({ where: AppConfigWhereInputObjectSchema.optional(), orderBy: z.union([AppConfigOrderByWithAggregationInputObjectSchema, AppConfigOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AppConfigScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AppConfigScalarFieldEnumSchema), _count: z.union([ z.literal(true), AppConfigCountAggregateInputObjectSchema ]).optional(), _min: AppConfigMinAggregateInputObjectSchema.optional(), _max: AppConfigMaxAggregateInputObjectSchema.optional() }).strict();