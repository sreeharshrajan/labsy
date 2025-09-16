import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './objects/ReportInvoiceOrderByWithRelationInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCountAggregateInputObjectSchema } from './objects/ReportInvoiceCountAggregateInput.schema';
import { ReportInvoiceMinAggregateInputObjectSchema } from './objects/ReportInvoiceMinAggregateInput.schema';
import { ReportInvoiceMaxAggregateInputObjectSchema } from './objects/ReportInvoiceMaxAggregateInput.schema';
import { ReportInvoiceAvgAggregateInputObjectSchema } from './objects/ReportInvoiceAvgAggregateInput.schema';
import { ReportInvoiceSumAggregateInputObjectSchema } from './objects/ReportInvoiceSumAggregateInput.schema';

export const ReportInvoiceAggregateSchema: z.ZodType<Prisma.ReportInvoiceAggregateArgs> = z.object({ orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional(), _min: ReportInvoiceMinAggregateInputObjectSchema.optional(), _max: ReportInvoiceMaxAggregateInputObjectSchema.optional(), _avg: ReportInvoiceAvgAggregateInputObjectSchema.optional(), _sum: ReportInvoiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceAggregateArgs>;

export const ReportInvoiceAggregateZodSchema = z.object({ orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional(), _min: ReportInvoiceMinAggregateInputObjectSchema.optional(), _max: ReportInvoiceMaxAggregateInputObjectSchema.optional(), _avg: ReportInvoiceAvgAggregateInputObjectSchema.optional(), _sum: ReportInvoiceSumAggregateInputObjectSchema.optional() }).strict();