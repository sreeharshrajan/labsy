import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantFindFirstSelectSchema: z.ZodType<Prisma.TenantSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    labLicenseNumber: z.boolean().optional(),
    contactEmail: z.boolean().optional(),
    contactPhone: z.boolean().optional(),
    gstin: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    canManageRoles: z.boolean().optional(),
    maxCustomRoles: z.boolean().optional(),
    maxUsers: z.boolean().optional(),
    users: z.boolean().optional(),
    subscriptions: z.boolean().optional(),
    auditLogs: z.boolean().optional(),
    ServiceCategory: z.boolean().optional(),
    Service: z.boolean().optional(),
    Customer: z.boolean().optional(),
    Doctor: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    tenantAddresses: z.boolean().optional(),
    SyncLog: z.boolean().optional(),
    Roles: z.boolean().optional(),
    ReportInvoicePayment: z.boolean().optional(),
    Notification: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantSelect>;

export const TenantFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    labLicenseNumber: z.boolean().optional(),
    contactEmail: z.boolean().optional(),
    contactPhone: z.boolean().optional(),
    gstin: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    canManageRoles: z.boolean().optional(),
    maxCustomRoles: z.boolean().optional(),
    maxUsers: z.boolean().optional(),
    users: z.boolean().optional(),
    subscriptions: z.boolean().optional(),
    auditLogs: z.boolean().optional(),
    ServiceCategory: z.boolean().optional(),
    Service: z.boolean().optional(),
    Customer: z.boolean().optional(),
    Doctor: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    tenantAddresses: z.boolean().optional(),
    SyncLog: z.boolean().optional(),
    Roles: z.boolean().optional(),
    ReportInvoicePayment: z.boolean().optional(),
    Notification: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantFindFirstSchema: z.ZodType<Prisma.TenantFindFirstArgs> = z.object({ select: TenantFindFirstSelectSchema.optional(), include: z.lazy(() => TenantIncludeObjectSchema.optional()), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantFindFirstArgs>;

export const TenantFindFirstZodSchema = z.object({ select: TenantFindFirstSelectSchema.optional(), include: z.lazy(() => TenantIncludeObjectSchema.optional()), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict();