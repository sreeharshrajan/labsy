import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportDetailOrderByWithRelationInputObjectSchema } from './objects/ReportDetailOrderByWithRelationInput.schema';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';
import { ReportDetailCountAggregateInputObjectSchema } from './objects/ReportDetailCountAggregateInput.schema';
import { ReportDetailMinAggregateInputObjectSchema } from './objects/ReportDetailMinAggregateInput.schema';
import { ReportDetailMaxAggregateInputObjectSchema } from './objects/ReportDetailMaxAggregateInput.schema';
import { ReportDetailAvgAggregateInputObjectSchema } from './objects/ReportDetailAvgAggregateInput.schema';
import { ReportDetailSumAggregateInputObjectSchema } from './objects/ReportDetailSumAggregateInput.schema';

export const ReportDetailAggregateSchema: z.ZodType<Prisma.ReportDetailAggregateArgs> = z.object({ orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional(), _min: ReportDetailMinAggregateInputObjectSchema.optional(), _max: ReportDetailMaxAggregateInputObjectSchema.optional(), _avg: ReportDetailAvgAggregateInputObjectSchema.optional(), _sum: ReportDetailSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportDetailAggregateArgs>;

export const ReportDetailAggregateZodSchema = z.object({ orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional(), _min: ReportDetailMinAggregateInputObjectSchema.optional(), _max: ReportDetailMaxAggregateInputObjectSchema.optional(), _avg: ReportDetailAvgAggregateInputObjectSchema.optional(), _sum: ReportDetailSumAggregateInputObjectSchema.optional() }).strict();