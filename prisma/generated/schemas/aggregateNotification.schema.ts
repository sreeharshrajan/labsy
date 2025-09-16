import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCountAggregateInputObjectSchema } from './objects/NotificationCountAggregateInput.schema';
import { NotificationMinAggregateInputObjectSchema } from './objects/NotificationMinAggregateInput.schema';
import { NotificationMaxAggregateInputObjectSchema } from './objects/NotificationMaxAggregateInput.schema';

export const NotificationAggregateSchema: z.ZodType<Prisma.NotificationAggregateArgs> = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional(), _min: NotificationMinAggregateInputObjectSchema.optional(), _max: NotificationMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationAggregateArgs>;

export const NotificationAggregateZodSchema = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional(), _min: NotificationMinAggregateInputObjectSchema.optional(), _max: NotificationMaxAggregateInputObjectSchema.optional() }).strict();