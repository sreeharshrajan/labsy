import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SubscriptionOrderByWithRelationInputObjectSchema } from './objects/SubscriptionOrderByWithRelationInput.schema';
import { SubscriptionWhereInputObjectSchema } from './objects/SubscriptionWhereInput.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './objects/SubscriptionWhereUniqueInput.schema';
import { SubscriptionCountAggregateInputObjectSchema } from './objects/SubscriptionCountAggregateInput.schema';

export const SubscriptionCountSchema: z.ZodType<Prisma.SubscriptionCountArgs> = z.object({ orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SubscriptionCountArgs>;

export const SubscriptionCountZodSchema = z.object({ orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional() }).strict();