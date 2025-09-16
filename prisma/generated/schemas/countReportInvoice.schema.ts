import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './objects/ReportInvoiceOrderByWithRelationInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCountAggregateInputObjectSchema } from './objects/ReportInvoiceCountAggregateInput.schema';

export const ReportInvoiceCountSchema: z.ZodType<Prisma.ReportInvoiceCountArgs> = z.object({ orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceCountArgs>;

export const ReportInvoiceCountZodSchema = z.object({ orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoiceCountAggregateInputObjectSchema ]).optional() }).strict();