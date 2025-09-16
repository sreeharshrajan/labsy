import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateOrderByWithRelationInputObjectSchema } from './objects/ReportTemplateOrderByWithRelationInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCountAggregateInputObjectSchema } from './objects/ReportTemplateCountAggregateInput.schema';

export const ReportTemplateCountSchema: z.ZodType<Prisma.ReportTemplateCountArgs> = z.object({ orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportTemplateCountArgs>;

export const ReportTemplateCountZodSchema = z.object({ orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportTemplateCountAggregateInputObjectSchema ]).optional() }).strict();