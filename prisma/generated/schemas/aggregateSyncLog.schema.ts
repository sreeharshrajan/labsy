import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogOrderByWithRelationInputObjectSchema } from './objects/SyncLogOrderByWithRelationInput.schema';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';
import { SyncLogCountAggregateInputObjectSchema } from './objects/SyncLogCountAggregateInput.schema';
import { SyncLogMinAggregateInputObjectSchema } from './objects/SyncLogMinAggregateInput.schema';
import { SyncLogMaxAggregateInputObjectSchema } from './objects/SyncLogMaxAggregateInput.schema';

export const SyncLogAggregateSchema: z.ZodType<Prisma.SyncLogAggregateArgs> = z.object({ orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional(), _min: SyncLogMinAggregateInputObjectSchema.optional(), _max: SyncLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SyncLogAggregateArgs>;

export const SyncLogAggregateZodSchema = z.object({ orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional(), _min: SyncLogMinAggregateInputObjectSchema.optional(), _max: SyncLogMaxAggregateInputObjectSchema.optional() }).strict();