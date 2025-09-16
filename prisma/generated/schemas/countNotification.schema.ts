import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCountAggregateInputObjectSchema } from './objects/NotificationCountAggregateInput.schema';

export const NotificationCountSchema: z.ZodType<Prisma.NotificationCountArgs> = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationCountArgs>;

export const NotificationCountZodSchema = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional() }).strict();