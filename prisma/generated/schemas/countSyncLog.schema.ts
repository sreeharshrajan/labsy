import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogOrderByWithRelationInputObjectSchema } from './objects/SyncLogOrderByWithRelationInput.schema';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';
import { SyncLogCountAggregateInputObjectSchema } from './objects/SyncLogCountAggregateInput.schema';

export const SyncLogCountSchema: z.ZodType<Prisma.SyncLogCountArgs> = z.object({ orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SyncLogCountArgs>;

export const SyncLogCountZodSchema = z.object({ orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional() }).strict();