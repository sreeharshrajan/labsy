import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportOrderByWithAggregationInputObjectSchema } from './objects/ReportOrderByWithAggregationInput.schema';
import { ReportScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportScalarWhereWithAggregatesInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';
import { ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';
import { ReportMinAggregateInputObjectSchema } from './objects/ReportMinAggregateInput.schema';
import { ReportMaxAggregateInputObjectSchema } from './objects/ReportMaxAggregateInput.schema';
import { ReportAvgAggregateInputObjectSchema } from './objects/ReportAvgAggregateInput.schema';
import { ReportSumAggregateInputObjectSchema } from './objects/ReportSumAggregateInput.schema';

export const ReportGroupBySchema: z.ZodType<Prisma.ReportGroupByArgs> = z.object({ where: ReportWhereInputObjectSchema.optional(), orderBy: z.union([ReportOrderByWithAggregationInputObjectSchema, ReportOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional(), _avg: ReportAvgAggregateInputObjectSchema.optional(), _sum: ReportSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportGroupByArgs>;

export const ReportGroupByZodSchema = z.object({ where: ReportWhereInputObjectSchema.optional(), orderBy: z.union([ReportOrderByWithAggregationInputObjectSchema, ReportOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional(), _avg: ReportAvgAggregateInputObjectSchema.optional(), _sum: ReportSumAggregateInputObjectSchema.optional() }).strict();