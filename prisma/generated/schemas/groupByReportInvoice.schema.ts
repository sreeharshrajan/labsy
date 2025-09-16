import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';
import { ReportInvoiceOrderByWithAggregationInputObjectSchema } from './objects/ReportInvoiceOrderByWithAggregationInput.schema';
import { ReportInvoiceScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportInvoiceScalarWhereWithAggregatesInput.schema';
import { ReportInvoiceScalarFieldEnumSchema } from './enums/ReportInvoiceScalarFieldEnum.schema';
import { ReportInvoiceCountAggregateInputObjectSchema } from './objects/ReportInvoiceCountAggregateInput.schema';
import { ReportInvoiceMinAggregateInputObjectSchema } from './objects/ReportInvoiceMinAggregateInput.schema';
import { ReportInvoiceMaxAggregateInputObjectSchema } from './objects/ReportInvoiceMaxAggregateInput.schema';
import { ReportInvoiceAvgAggregateInputObjectSchema } from './objects/ReportInvoiceAvgAggregateInput.schema';
import { ReportInvoiceSumAggregateInputObjectSchema } from './objects/ReportInvoiceSumAggregateInput.schema';

export const ReportInvoiceGroupBySchema: z.ZodType<Prisma.ReportInvoiceGroupByArgs> = z.object({ where: ReportInvoiceWhereInputObjectSchema.optional(), orderBy: z.union([ReportInvoiceOrderByWithAggregationInputObjectSchema, ReportInvoiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportInvoiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportInvoiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional(), _min: ReportInvoiceMinAggregateInputObjectSchema.optional(), _max: ReportInvoiceMaxAggregateInputObjectSchema.optional(), _avg: ReportInvoiceAvgAggregateInputObjectSchema.optional(), _sum: ReportInvoiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceGroupByArgs>;

export const ReportInvoiceGroupByZodSchema = z.object({ where: ReportInvoiceWhereInputObjectSchema.optional(), orderBy: z.union([ReportInvoiceOrderByWithAggregationInputObjectSchema, ReportInvoiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportInvoiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportInvoiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional(), _min: ReportInvoiceMinAggregateInputObjectSchema.optional(), _max: ReportInvoiceMaxAggregateInputObjectSchema.optional(), _avg: ReportInvoiceAvgAggregateInputObjectSchema.optional(), _sum: ReportInvoiceSumAggregateInputObjectSchema.optional() }).strict();