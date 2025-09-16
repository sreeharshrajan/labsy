import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SubscriptionIncludeObjectSchema } from './objects/SubscriptionInclude.schema';
import { SubscriptionOrderByWithRelationInputObjectSchema } from './objects/SubscriptionOrderByWithRelationInput.schema';
import { SubscriptionWhereInputObjectSchema } from './objects/SubscriptionWhereInput.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './objects/SubscriptionWhereUniqueInput.schema';
import { SubscriptionScalarFieldEnumSchema } from './enums/SubscriptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubscriptionFindFirstSelectSchema: z.ZodType<Prisma.SubscriptionSelect> = z.object({
    id: z.boolean().optional(),
    plan: z.boolean().optional(),
    status: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    renewalDate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    stripeId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SubscriptionSelect>;

export const SubscriptionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    plan: z.boolean().optional(),
    status: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    renewalDate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    stripeId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict();

export const SubscriptionFindFirstSchema: z.ZodType<Prisma.SubscriptionFindFirstArgs> = z.object({ select: SubscriptionFindFirstSelectSchema.optional(), include: z.lazy(() => SubscriptionIncludeObjectSchema.optional()), orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscriptionScalarFieldEnumSchema, SubscriptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubscriptionFindFirstArgs>;

export const SubscriptionFindFirstZodSchema = z.object({ select: SubscriptionFindFirstSelectSchema.optional(), include: z.lazy(() => SubscriptionIncludeObjectSchema.optional()), orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscriptionScalarFieldEnumSchema, SubscriptionScalarFieldEnumSchema.array()]).optional() }).strict();