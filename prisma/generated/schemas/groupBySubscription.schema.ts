import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SubscriptionWhereInputObjectSchema } from './objects/SubscriptionWhereInput.schema';
import { SubscriptionOrderByWithAggregationInputObjectSchema } from './objects/SubscriptionOrderByWithAggregationInput.schema';
import { SubscriptionScalarWhereWithAggregatesInputObjectSchema } from './objects/SubscriptionScalarWhereWithAggregatesInput.schema';
import { SubscriptionScalarFieldEnumSchema } from './enums/SubscriptionScalarFieldEnum.schema';
import { SubscriptionCountAggregateInputObjectSchema } from './objects/SubscriptionCountAggregateInput.schema';
import { SubscriptionMinAggregateInputObjectSchema } from './objects/SubscriptionMinAggregateInput.schema';
import { SubscriptionMaxAggregateInputObjectSchema } from './objects/SubscriptionMaxAggregateInput.schema';

export const SubscriptionGroupBySchema: z.ZodType<Prisma.SubscriptionGroupByArgs> = z.object({ where: SubscriptionWhereInputObjectSchema.optional(), orderBy: z.union([SubscriptionOrderByWithAggregationInputObjectSchema, SubscriptionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SubscriptionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SubscriptionScalarFieldEnumSchema), _count: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional(), _min: SubscriptionMinAggregateInputObjectSchema.optional(), _max: SubscriptionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubscriptionGroupByArgs>;

export const SubscriptionGroupByZodSchema = z.object({ where: SubscriptionWhereInputObjectSchema.optional(), orderBy: z.union([SubscriptionOrderByWithAggregationInputObjectSchema, SubscriptionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SubscriptionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SubscriptionScalarFieldEnumSchema), _count: z.union([ z.literal(true), SubscriptionCountAggregateInputObjectSchema ]).optional(), _min: SubscriptionMinAggregateInputObjectSchema.optional(), _max: SubscriptionMaxAggregateInputObjectSchema.optional() }).strict();