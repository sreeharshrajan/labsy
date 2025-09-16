import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';
import { ReportTemplateOrderByWithAggregationInputObjectSchema } from './objects/ReportTemplateOrderByWithAggregationInput.schema';
import { ReportTemplateScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportTemplateScalarWhereWithAggregatesInput.schema';
import { ReportTemplateScalarFieldEnumSchema } from './enums/ReportTemplateScalarFieldEnum.schema';
import { ReportTemplateCountAggregateInputObjectSchema } from './objects/ReportTemplateCountAggregateInput.schema';
import { ReportTemplateMinAggregateInputObjectSchema } from './objects/ReportTemplateMinAggregateInput.schema';
import { ReportTemplateMaxAggregateInputObjectSchema } from './objects/ReportTemplateMaxAggregateInput.schema';

export const ReportTemplateGroupBySchema: z.ZodType<Prisma.ReportTemplateGroupByArgs> = z.object({ where: ReportTemplateWhereInputObjectSchema.optional(), orderBy: z.union([ReportTemplateOrderByWithAggregationInputObjectSchema, ReportTemplateOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportTemplateScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportTemplateScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional(), _min: ReportTemplateMinAggregateInputObjectSchema.optional(), _max: ReportTemplateMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportTemplateGroupByArgs>;

export const ReportTemplateGroupByZodSchema = z.object({ where: ReportTemplateWhereInputObjectSchema.optional(), orderBy: z.union([ReportTemplateOrderByWithAggregationInputObjectSchema, ReportTemplateOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportTemplateScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportTemplateScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional(), _min: ReportTemplateMinAggregateInputObjectSchema.optional(), _max: ReportTemplateMaxAggregateInputObjectSchema.optional() }).strict();