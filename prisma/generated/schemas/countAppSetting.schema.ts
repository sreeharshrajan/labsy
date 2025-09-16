import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingOrderByWithRelationInputObjectSchema } from './objects/AppSettingOrderByWithRelationInput.schema';
import { AppSettingWhereInputObjectSchema } from './objects/AppSettingWhereInput.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './objects/AppSettingWhereUniqueInput.schema';
import { AppSettingCountAggregateInputObjectSchema } from './objects/AppSettingCountAggregateInput.schema';

export const AppSettingCountSchema: z.ZodType<Prisma.AppSettingCountArgs> = z.object({ orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingCountArgs>;

export const AppSettingCountZodSchema = z.object({ orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppSettingCountAggregateInputObjectSchema ]).optional() }).strict();