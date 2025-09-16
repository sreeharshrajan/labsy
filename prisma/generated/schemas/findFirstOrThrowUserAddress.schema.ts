import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserAddressIncludeObjectSchema } from './objects/UserAddressInclude.schema';
import { UserAddressOrderByWithRelationInputObjectSchema } from './objects/UserAddressOrderByWithRelationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';
import { UserAddressScalarFieldEnumSchema } from './enums/UserAddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserAddressFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserAddressSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    address: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserAddressSelect>;

export const UserAddressFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    address: z.boolean().optional()
  }).strict();

export const UserAddressFindFirstOrThrowSchema: z.ZodType<Prisma.UserAddressFindFirstOrThrowArgs> = z.object({ select: UserAddressFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserAddressIncludeObjectSchema.optional()), orderBy: z.union([UserAddressOrderByWithRelationInputObjectSchema, UserAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAddressWhereInputObjectSchema.optional(), cursor: UserAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserAddressScalarFieldEnumSchema, UserAddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserAddressFindFirstOrThrowArgs>;

export const UserAddressFindFirstOrThrowZodSchema = z.object({ select: UserAddressFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserAddressIncludeObjectSchema.optional()), orderBy: z.union([UserAddressOrderByWithRelationInputObjectSchema, UserAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAddressWhereInputObjectSchema.optional(), cursor: UserAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserAddressScalarFieldEnumSchema, UserAddressScalarFieldEnumSchema.array()]).optional() }).strict();