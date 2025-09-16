import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateOrderByWithRelationInputObjectSchema } from './objects/ReportTemplateOrderByWithRelationInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCountAggregateInputObjectSchema } from './objects/ReportTemplateCountAggregateInput.schema';
import { ReportTemplateMinAggregateInputObjectSchema } from './objects/ReportTemplateMinAggregateInput.schema';
import { ReportTemplateMaxAggregateInputObjectSchema } from './objects/ReportTemplateMaxAggregateInput.schema';

export const ReportTemplateAggregateSchema: z.ZodType<Prisma.ReportTemplateAggregateArgs> = z.object({ orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional(), _min: ReportTemplateMinAggregateInputObjectSchema.optional(), _max: ReportTemplateMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportTemplateAggregateArgs>;

export const ReportTemplateAggregateZodSchema = z.object({ orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional(), _min: ReportTemplateMinAggregateInputObjectSchema.optional(), _max: ReportTemplateMaxAggregateInputObjectSchema.optional() }).strict();