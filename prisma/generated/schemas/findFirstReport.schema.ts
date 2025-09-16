import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFindFirstSelectSchema: z.ZodType<Prisma.ReportSelect> = z.object({
    id: z.boolean().optional(),
    reportCode: z.boolean().optional(),
    fileUrl: z.boolean().optional(),
    collectedPlace: z.boolean().optional(),
    notes: z.boolean().optional(),
    status: z.boolean().optional(),
    customerType: z.boolean().optional(),
    issuedAt: z.boolean().optional(),
    collectedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    version: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    collectedBy: z.boolean().optional(),
    customerAddressId: z.boolean().optional(),
    labAddressId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    customer: z.boolean().optional(),
    doctor: z.boolean().optional(),
    invoice: z.boolean().optional(),
    details: z.boolean().optional(),
    updateLog: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    collectedByUser: z.boolean().optional(),
    customerAddress: z.boolean().optional(),
    labAddress: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportSelect>;

export const ReportFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    reportCode: z.boolean().optional(),
    fileUrl: z.boolean().optional(),
    collectedPlace: z.boolean().optional(),
    notes: z.boolean().optional(),
    status: z.boolean().optional(),
    customerType: z.boolean().optional(),
    issuedAt: z.boolean().optional(),
    collectedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    version: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    collectedBy: z.boolean().optional(),
    customerAddressId: z.boolean().optional(),
    labAddressId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    customer: z.boolean().optional(),
    doctor: z.boolean().optional(),
    invoice: z.boolean().optional(),
    details: z.boolean().optional(),
    updateLog: z.boolean().optional(),
    createdByUser: z.boolean().optional(),
    collectedByUser: z.boolean().optional(),
    customerAddress: z.boolean().optional(),
    labAddress: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportFindFirstSchema: z.ZodType<Prisma.ReportFindFirstArgs> = z.object({ select: ReportFindFirstSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportFindFirstArgs>;

export const ReportFindFirstZodSchema = z.object({ select: ReportFindFirstSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict();