import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportParameterOrderByWithRelationInputObjectSchema } from './objects/ReportParameterOrderByWithRelationInput.schema';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';
import { ReportParameterCountAggregateInputObjectSchema } from './objects/ReportParameterCountAggregateInput.schema';
import { ReportParameterMinAggregateInputObjectSchema } from './objects/ReportParameterMinAggregateInput.schema';
import { ReportParameterMaxAggregateInputObjectSchema } from './objects/ReportParameterMaxAggregateInput.schema';
import { ReportParameterAvgAggregateInputObjectSchema } from './objects/ReportParameterAvgAggregateInput.schema';
import { ReportParameterSumAggregateInputObjectSchema } from './objects/ReportParameterSumAggregateInput.schema';

export const ReportParameterAggregateSchema: z.ZodType<Prisma.ReportParameterAggregateArgs> = z.object({ orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportParameterCountAggregateInputObjectSchema ]).optional(), _min: ReportParameterMinAggregateInputObjectSchema.optional(), _max: ReportParameterMaxAggregateInputObjectSchema.optional(), _avg: ReportParameterAvgAggregateInputObjectSchema.optional(), _sum: ReportParameterSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportParameterAggregateArgs>;

export const ReportParameterAggregateZodSchema = z.object({ orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportParameterCountAggregateInputObjectSchema ]).optional(), _min: ReportParameterMinAggregateInputObjectSchema.optional(), _max: ReportParameterMaxAggregateInputObjectSchema.optional(), _avg: ReportParameterAvgAggregateInputObjectSchema.optional(), _sum: ReportParameterSumAggregateInputObjectSchema.optional() }).strict();