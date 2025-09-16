import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingValueOrderByWithRelationInputObjectSchema } from './objects/AppSettingValueOrderByWithRelationInput.schema';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueCountAggregateInputObjectSchema } from './objects/AppSettingValueCountAggregateInput.schema';

export const AppSettingValueCountSchema: z.ZodType<Prisma.AppSettingValueCountArgs> = z.object({ orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingValueCountArgs>;

export const AppSettingValueCountZodSchema = z.object({ orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppSettingValueCountAggregateInputObjectSchema ]).optional() }).strict();