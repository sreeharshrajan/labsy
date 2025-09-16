import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoicePaymentIncludeObjectSchema } from './objects/ReportInvoicePaymentInclude.schema';
import { ReportInvoicePaymentOrderByWithRelationInputObjectSchema } from './objects/ReportInvoicePaymentOrderByWithRelationInput.schema';
import { ReportInvoicePaymentWhereInputObjectSchema } from './objects/ReportInvoicePaymentWhereInput.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './objects/ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentScalarFieldEnumSchema } from './enums/ReportInvoicePaymentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportInvoicePaymentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportInvoicePaymentSelect> = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    method: z.boolean().optional(),
    status: z.boolean().optional(),
    referenceNo: z.boolean().optional(),
    transactionId: z.boolean().optional(),
    paidAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    invoice: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportInvoicePaymentSelect>;

export const ReportInvoicePaymentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    method: z.boolean().optional(),
    status: z.boolean().optional(),
    referenceNo: z.boolean().optional(),
    transactionId: z.boolean().optional(),
    paidAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    invoice: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict();

export const ReportInvoicePaymentFindFirstOrThrowSchema: z.ZodType<Prisma.ReportInvoicePaymentFindFirstOrThrowArgs> = z.object({ select: ReportInvoicePaymentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportInvoicePaymentIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoicePaymentOrderByWithRelationInputObjectSchema, ReportInvoicePaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoicePaymentWhereInputObjectSchema.optional(), cursor: ReportInvoicePaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoicePaymentScalarFieldEnumSchema, ReportInvoicePaymentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoicePaymentFindFirstOrThrowArgs>;

export const ReportInvoicePaymentFindFirstOrThrowZodSchema = z.object({ select: ReportInvoicePaymentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportInvoicePaymentIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoicePaymentOrderByWithRelationInputObjectSchema, ReportInvoicePaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoicePaymentWhereInputObjectSchema.optional(), cursor: ReportInvoicePaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoicePaymentScalarFieldEnumSchema, ReportInvoicePaymentScalarFieldEnumSchema.array()]).optional() }).strict();