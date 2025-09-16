import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoicePaymentOrderByWithRelationInputObjectSchema } from './objects/ReportInvoicePaymentOrderByWithRelationInput.schema';
import { ReportInvoicePaymentWhereInputObjectSchema } from './objects/ReportInvoicePaymentWhereInput.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentCountAggregateInputObjectSchema } from './objects/ReportInvoicePaymentCountAggregateInput.schema';

export const ReportInvoicePaymentCountSchema: z.ZodType<Prisma.ReportInvoicePaymentCountArgs> = z.object({ orderBy: z.union([ReportInvoicePaymentOrderByWithRelationInputObjectSchema, ReportInvoicePaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoicePaymentWhereInputObjectSchema.optional(), cursor: ReportInvoicePaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoicePaymentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCountArgs>;

export const ReportInvoicePaymentCountZodSchema = z.object({ orderBy: z.union([ReportInvoicePaymentOrderByWithRelationInputObjectSchema, ReportInvoicePaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoicePaymentWhereInputObjectSchema.optional(), cursor: ReportInvoicePaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportInvoicePaymentCountAggregateInputObjectSchema ]).optional() }).strict();