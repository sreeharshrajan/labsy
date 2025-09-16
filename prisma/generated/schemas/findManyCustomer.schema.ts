import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerIncludeObjectSchema } from './objects/CustomerInclude.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './objects/CustomerOrderByWithRelationInput.schema';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerScalarFieldEnumSchema } from './enums/CustomerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerFindManySelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    gender: z.boolean().optional(),
    bloodGroup: z.boolean().optional(),
    maritalStatus: z.boolean().optional(),
    aadharNumber: z.boolean().optional(),
    panNumber: z.boolean().optional(),
    passportNumber: z.boolean().optional(),
    knownAllergies: z.boolean().optional(),
    chronicConditions: z.boolean().optional(),
    medications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    customerAddresses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomerSelect>;

export const CustomerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    gender: z.boolean().optional(),
    bloodGroup: z.boolean().optional(),
    maritalStatus: z.boolean().optional(),
    aadharNumber: z.boolean().optional(),
    panNumber: z.boolean().optional(),
    passportNumber: z.boolean().optional(),
    knownAllergies: z.boolean().optional(),
    chronicConditions: z.boolean().optional(),
    medications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    customerAddresses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CustomerFindManySchema: z.ZodType<Prisma.CustomerFindManyArgs> = z.object({ select: CustomerFindManySelectSchema.optional(), include: z.lazy(() => CustomerIncludeObjectSchema.optional()), orderBy: z.union([CustomerOrderByWithRelationInputObjectSchema, CustomerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerWhereInputObjectSchema.optional(), cursor: CustomerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerScalarFieldEnumSchema, CustomerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomerFindManyArgs>;

export const CustomerFindManyZodSchema = z.object({ select: CustomerFindManySelectSchema.optional(), include: z.lazy(() => CustomerIncludeObjectSchema.optional()), orderBy: z.union([CustomerOrderByWithRelationInputObjectSchema, CustomerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerWhereInputObjectSchema.optional(), cursor: CustomerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerScalarFieldEnumSchema, CustomerScalarFieldEnumSchema.array()]).optional() }).strict();