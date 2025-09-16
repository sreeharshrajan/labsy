import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceOrderByWithRelationInputObjectSchema } from './objects/ServiceOrderByWithRelationInput.schema';
import { ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceScalarFieldEnumSchema } from './enums/ServiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ServiceSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    Tenant: z.boolean().optional(),
    Category: z.boolean().optional(),
    ReportInvoiceItem: z.boolean().optional(),
    ReportDetail: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServiceSelect>;

export const ServiceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    Tenant: z.boolean().optional(),
    Category: z.boolean().optional(),
    ReportInvoiceItem: z.boolean().optional(),
    ReportDetail: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ServiceFindFirstOrThrowSchema: z.ZodType<Prisma.ServiceFindFirstOrThrowArgs> = z.object({ select: ServiceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServiceIncludeObjectSchema.optional()), orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceFindFirstOrThrowArgs>;

export const ServiceFindFirstOrThrowZodSchema = z.object({ select: ServiceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServiceIncludeObjectSchema.optional()), orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict();