import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportChangeLogOrderByWithRelationInputObjectSchema } from './objects/ReportChangeLogOrderByWithRelationInput.schema';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCountAggregateInputObjectSchema } from './objects/ReportChangeLogCountAggregateInput.schema';
import { ReportChangeLogMinAggregateInputObjectSchema } from './objects/ReportChangeLogMinAggregateInput.schema';
import { ReportChangeLogMaxAggregateInputObjectSchema } from './objects/ReportChangeLogMaxAggregateInput.schema';
import { ReportChangeLogAvgAggregateInputObjectSchema } from './objects/ReportChangeLogAvgAggregateInput.schema';
import { ReportChangeLogSumAggregateInputObjectSchema } from './objects/ReportChangeLogSumAggregateInput.schema';

export const ReportChangeLogAggregateSchema: z.ZodType<Prisma.ReportChangeLogAggregateArgs> = z.object({ orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportChangeLogCountAggregateInputObjectSchema ]).optional(), _min: ReportChangeLogMinAggregateInputObjectSchema.optional(), _max: ReportChangeLogMaxAggregateInputObjectSchema.optional(), _avg: ReportChangeLogAvgAggregateInputObjectSchema.optional(), _sum: ReportChangeLogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogAggregateArgs>;

export const ReportChangeLogAggregateZodSchema = z.object({ orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportChangeLogCountAggregateInputObjectSchema ]).optional(), _min: ReportChangeLogMinAggregateInputObjectSchema.optional(), _max: ReportChangeLogMaxAggregateInputObjectSchema.optional(), _avg: ReportChangeLogAvgAggregateInputObjectSchema.optional(), _sum: ReportChangeLogSumAggregateInputObjectSchema.optional() }).strict();