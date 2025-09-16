import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerAddressIncludeObjectSchema } from './objects/CustomerAddressInclude.schema';
import { CustomerAddressOrderByWithRelationInputObjectSchema } from './objects/CustomerAddressOrderByWithRelationInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressScalarFieldEnumSchema } from './enums/CustomerAddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerAddressFindFirstSelectSchema: z.ZodType<Prisma.CustomerAddressSelect> = z.object({
    id: z.boolean().optional(),
    customerId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    customer: z.boolean().optional(),
    address: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomerAddressSelect>;

export const CustomerAddressFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    customerId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    customer: z.boolean().optional(),
    address: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CustomerAddressFindFirstSchema: z.ZodType<Prisma.CustomerAddressFindFirstArgs> = z.object({ select: CustomerAddressFindFirstSelectSchema.optional(), include: z.lazy(() => CustomerAddressIncludeObjectSchema.optional()), orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerAddressScalarFieldEnumSchema, CustomerAddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomerAddressFindFirstArgs>;

export const CustomerAddressFindFirstZodSchema = z.object({ select: CustomerAddressFindFirstSelectSchema.optional(), include: z.lazy(() => CustomerAddressIncludeObjectSchema.optional()), orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerAddressScalarFieldEnumSchema, CustomerAddressScalarFieldEnumSchema.array()]).optional() }).strict();