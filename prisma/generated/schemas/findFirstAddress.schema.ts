import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressIncludeObjectSchema } from './objects/AddressInclude.schema';
import { AddressOrderByWithRelationInputObjectSchema } from './objects/AddressOrderByWithRelationInput.schema';
import { AddressWhereInputObjectSchema } from './objects/AddressWhereInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './objects/AddressWhereUniqueInput.schema';
import { AddressScalarFieldEnumSchema } from './enums/AddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AddressFindFirstSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
    id: z.boolean().optional(),
    line1: z.boolean().optional(),
    line2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    country: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantAddresses: z.boolean().optional(),
    userAddresses: z.boolean().optional(),
    customerAddresses: z.boolean().optional(),
    doctorAddresses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AddressSelect>;

export const AddressFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    line1: z.boolean().optional(),
    line2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zip: z.boolean().optional(),
    country: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantAddresses: z.boolean().optional(),
    userAddresses: z.boolean().optional(),
    customerAddresses: z.boolean().optional(),
    doctorAddresses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AddressFindFirstSchema: z.ZodType<Prisma.AddressFindFirstArgs> = z.object({ select: AddressFindFirstSelectSchema.optional(), include: z.lazy(() => AddressIncludeObjectSchema.optional()), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AddressFindFirstArgs>;

export const AddressFindFirstZodSchema = z.object({ select: AddressFindFirstSelectSchema.optional(), include: z.lazy(() => AddressIncludeObjectSchema.optional()), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict();