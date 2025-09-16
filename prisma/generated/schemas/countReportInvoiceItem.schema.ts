import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceItemOrderByWithRelationInputObjectSchema } from './objects/ReportInvoiceItemOrderByWithRelationInput.schema';
import { ReportInvoiceItemWhereInputObjectSchema } from './objects/ReportInvoiceItemWhereInput.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemCountAggregateInputObjectSchema } from './objects/ReportInvoiceItemCountAggregateInput.schema';

export const ReportInvoiceItemCountSchema: z.ZodType<Prisma.ReportInvoiceItemCountArgs> = z.object({ orderBy: z.union([ReportInvoiceItemOrderByWithRelationInputObjectSchema, ReportInvoiceItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceItemWhereInputObjectSchema.optional(), cursor: ReportInvoiceItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoiceItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceItemCountArgs>;

export const ReportInvoiceItemCountZodSchema = z.object({ orderBy: z.union([ReportInvoiceItemOrderByWithRelationInputObjectSchema, ReportInvoiceItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceItemWhereInputObjectSchema.optional(), cursor: ReportInvoiceItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoiceItemCountAggregateInputObjectSchema ]).optional() }).strict();