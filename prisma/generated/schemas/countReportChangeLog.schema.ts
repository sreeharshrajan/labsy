import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportChangeLogOrderByWithRelationInputObjectSchema } from './objects/ReportChangeLogOrderByWithRelationInput.schema';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCountAggregateInputObjectSchema } from './objects/ReportChangeLogCountAggregateInput.schema';

export const ReportChangeLogCountSchema: z.ZodType<Prisma.ReportChangeLogCountArgs> = z.object({ orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportChangeLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogCountArgs>;

export const ReportChangeLogCountZodSchema = z.object({ orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportChangeLogCountAggregateInputObjectSchema ]).optional() }).strict();