import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressOrderByWithRelationInputObjectSchema } from './objects/TenantAddressOrderByWithRelationInput.schema';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';
import { TenantAddressScalarFieldEnumSchema } from './enums/TenantAddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantAddressFindFirstSelectSchema: z.ZodType<Prisma.TenantAddressSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenant: z.boolean().optional(),
    address: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantAddressSelect>;

export const TenantAddressFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenant: z.boolean().optional(),
    address: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantAddressFindFirstSchema: z.ZodType<Prisma.TenantAddressFindFirstArgs> = z.object({ select: TenantAddressFindFirstSelectSchema.optional(), include: z.lazy(() => TenantAddressIncludeObjectSchema.optional()), orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantAddressScalarFieldEnumSchema, TenantAddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantAddressFindFirstArgs>;

export const TenantAddressFindFirstZodSchema = z.object({ select: TenantAddressFindFirstSelectSchema.optional(), include: z.lazy(() => TenantAddressIncludeObjectSchema.optional()), orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantAddressScalarFieldEnumSchema, TenantAddressScalarFieldEnumSchema.array()]).optional() }).strict();