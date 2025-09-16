import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';
import { ReportDetailOrderByWithAggregationInputObjectSchema } from './objects/ReportDetailOrderByWithAggregationInput.schema';
import { ReportDetailScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportDetailScalarWhereWithAggregatesInput.schema';
import { ReportDetailScalarFieldEnumSchema } from './enums/ReportDetailScalarFieldEnum.schema';
import { ReportDetailCountAggregateInputObjectSchema } from './objects/ReportDetailCountAggregateInput.schema';
import { ReportDetailMinAggregateInputObjectSchema } from './objects/ReportDetailMinAggregateInput.schema';
import { ReportDetailMaxAggregateInputObjectSchema } from './objects/ReportDetailMaxAggregateInput.schema';
import { ReportDetailAvgAggregateInputObjectSchema } from './objects/ReportDetailAvgAggregateInput.schema';
import { ReportDetailSumAggregateInputObjectSchema } from './objects/ReportDetailSumAggregateInput.schema';

export const ReportDetailGroupBySchema: z.ZodType<Prisma.ReportDetailGroupByArgs> = z.object({ where: ReportDetailWhereInputObjectSchema.optional(), orderBy: z.union([ReportDetailOrderByWithAggregationInputObjectSchema, ReportDetailOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportDetailScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportDetailScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional(), _min: ReportDetailMinAggregateInputObjectSchema.optional(), _max: ReportDetailMaxAggregateInputObjectSchema.optional(), _avg: ReportDetailAvgAggregateInputObjectSchema.optional(), _sum: ReportDetailSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportDetailGroupByArgs>;

export const ReportDetailGroupByZodSchema = z.object({ where: ReportDetailWhereInputObjectSchema.optional(), orderBy: z.union([ReportDetailOrderByWithAggregationInputObjectSchema, ReportDetailOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportDetailScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportDetailScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional(), _min: ReportDetailMinAggregateInputObjectSchema.optional(), _max: ReportDetailMaxAggregateInputObjectSchema.optional(), _avg: ReportDetailAvgAggregateInputObjectSchema.optional(), _sum: ReportDetailSumAggregateInputObjectSchema.optional() }).strict();