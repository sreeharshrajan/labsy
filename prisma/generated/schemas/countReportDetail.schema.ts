import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportDetailOrderByWithRelationInputObjectSchema } from './objects/ReportDetailOrderByWithRelationInput.schema';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';
import { ReportDetailCountAggregateInputObjectSchema } from './objects/ReportDetailCountAggregateInput.schema';

export const ReportDetailCountSchema: z.ZodType<Prisma.ReportDetailCountArgs> = z.object({ orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportDetailCountArgs>;

export const ReportDetailCountZodSchema = z.object({ orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportDetailCountAggregateInputObjectSchema ]).optional() }).strict();