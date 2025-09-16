import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    userTitle: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    image: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    phone: z.boolean().optional(),
    isSuperAdmin: z.boolean().optional(),
    status: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenants: z.boolean().optional(),
    sessions: z.boolean().optional(),
    accounts: z.boolean().optional(),
    auditLogs: z.boolean().optional(),
    userAddresses: z.boolean().optional(),
    ReportChangeLog: z.boolean().optional(),
    Notification: z.boolean().optional(),
    posts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userTitle: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    image: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    phone: z.boolean().optional(),
    isSuperAdmin: z.boolean().optional(),
    status: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenants: z.boolean().optional(),
    sessions: z.boolean().optional(),
    accounts: z.boolean().optional(),
    auditLogs: z.boolean().optional(),
    userAddresses: z.boolean().optional(),
    ReportChangeLog: z.boolean().optional(),
    Notification: z.boolean().optional(),
    posts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();