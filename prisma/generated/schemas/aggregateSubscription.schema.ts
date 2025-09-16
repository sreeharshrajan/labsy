import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SubscriptionOrderByWithRelationInputObjectSchema } from './objects/SubscriptionOrderByWithRelationInput.schema';
import { SubscriptionWhereInputObjectSchema } from './objects/SubscriptionWhereInput.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './objects/SubscriptionWhereUniqueInput.schema';
import { SubscriptionCountAggregateInputObjectSchema } from './objects/SubscriptionCountAggregateInput.schema';
import { SubscriptionMinAggregateInputObjectSchema } from './objects/SubscriptionMinAggregateInput.schema';
import { SubscriptionMaxAggregateInputObjectSchema } from './objects/SubscriptionMaxAggregateInput.schema';

export const SubscriptionAggregateSchema: z.ZodType<Prisma.SubscriptionAggregateArgs> = z.object({ orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional(), _min: SubscriptionMinAggregateInputObjectSchema.optional(), _max: SubscriptionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubscriptionAggregateArgs>;

export const SubscriptionAggregateZodSchema = z.object({ orderBy: z.union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscriptionWhereInputObjectSchema.optional(), cursor: SubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional(), _min: SubscriptionMinAggregateInputObjectSchema.optional(), _max: SubscriptionMaxAggregateInputObjectSchema.optional() }).strict();