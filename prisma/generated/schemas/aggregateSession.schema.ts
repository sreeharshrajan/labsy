import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema';
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';
import { SessionCountAggregateInputObjectSchema } from './objects/SessionCountAggregateInput.schema';
import { SessionMinAggregateInputObjectSchema } from './objects/SessionMinAggregateInput.schema';
import { SessionMaxAggregateInputObjectSchema } from './objects/SessionMaxAggregateInput.schema';

export const SessionAggregateSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionAggregateArgs>;

export const SessionAggregateZodSchema = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict();