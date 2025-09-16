import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceIncludeObjectSchema } from './objects/ReportInvoiceInclude.schema';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './objects/ReportInvoiceOrderByWithRelationInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './objects/ReportInvoiceWhereInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './objects/ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceScalarFieldEnumSchema } from './enums/ReportInvoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportInvoiceFindManySelectSchema: z.ZodType<Prisma.ReportInvoiceSelect> = z.object({
    id: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    discount: z.boolean().optional(),
    netAmount: z.boolean().optional(),
    paymentType: z.boolean().optional(),
    status: z.boolean().optional(),
    issuedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    customer: z.boolean().optional(),
    doctor: z.boolean().optional(),
    items: z.boolean().optional(),
    payments: z.boolean().optional(),
    logs: z.boolean().optional(),
    Report: z.boolean().optional(),
    Service: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceSelect>;

export const ReportInvoiceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    discount: z.boolean().optional(),
    netAmount: z.boolean().optional(),
    paymentType: z.boolean().optional(),
    status: z.boolean().optional(),
    issuedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    customer: z.boolean().optional(),
    doctor: z.boolean().optional(),
    items: z.boolean().optional(),
    payments: z.boolean().optional(),
    logs: z.boolean().optional(),
    Report: z.boolean().optional(),
    Service: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportInvoiceFindManySchema: z.ZodType<Prisma.ReportInvoiceFindManyArgs> = z.object({ select: ReportInvoiceFindManySelectSchema.optional(), include: z.lazy(() => ReportInvoiceIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoiceScalarFieldEnumSchema, ReportInvoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceFindManyArgs>;

export const ReportInvoiceFindManyZodSchema = z.object({ select: ReportInvoiceFindManySelectSchema.optional(), include: z.lazy(() => ReportInvoiceIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoiceOrderByWithRelationInputObjectSchema, ReportInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceWhereInputObjectSchema.optional(), cursor: ReportInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoiceScalarFieldEnumSchema, ReportInvoiceScalarFieldEnumSchema.array()]).optional() }).strict();