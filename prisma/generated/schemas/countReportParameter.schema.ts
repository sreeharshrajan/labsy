import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportParameterOrderByWithRelationInputObjectSchema } from './objects/ReportParameterOrderByWithRelationInput.schema';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';
import { ReportParameterCountAggregateInputObjectSchema } from './objects/ReportParameterCountAggregateInput.schema';

export const ReportParameterCountSchema: z.ZodType<Prisma.ReportParameterCountArgs> = z.object({ orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportParameterCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportParameterCountArgs>;

export const ReportParameterCountZodSchema = z.object({ orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportParameterCountAggregateInputObjectSchema ]).optional() }).strict();