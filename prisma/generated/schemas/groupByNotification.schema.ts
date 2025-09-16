import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationOrderByWithAggregationInputObjectSchema } from './objects/NotificationOrderByWithAggregationInput.schema';
import { NotificationScalarWhereWithAggregatesInputObjectSchema } from './objects/NotificationScalarWhereWithAggregatesInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';
import { NotificationCountAggregateInputObjectSchema } from './objects/NotificationCountAggregateInput.schema';
import { NotificationMinAggregateInputObjectSchema } from './objects/NotificationMinAggregateInput.schema';
import { NotificationMaxAggregateInputObjectSchema } from './objects/NotificationMaxAggregateInput.schema';

export const NotificationGroupBySchema: z.ZodType<Prisma.NotificationGroupByArgs> = z.object({ where: NotificationWhereInputObjectSchema.optional(), orderBy: z.union([NotificationOrderByWithAggregationInputObjectSchema, NotificationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NotificationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NotificationScalarFieldEnumSchema), _count: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional(), _min: NotificationMinAggregateInputObjectSchema.optional(), _max: NotificationMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationGroupByArgs>;

export const NotificationGroupByZodSchema = z.object({ where: NotificationWhereInputObjectSchema.optional(), orderBy: z.union([NotificationOrderByWithAggregationInputObjectSchema, NotificationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: NotificationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(NotificationScalarFieldEnumSchema), _count: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional(), _min: NotificationMinAggregateInputObjectSchema.optional(), _max: NotificationMaxAggregateInputObjectSchema.optional() }).strict();