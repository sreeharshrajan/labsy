import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';
import { SyncLogOrderByWithAggregationInputObjectSchema } from './objects/SyncLogOrderByWithAggregationInput.schema';
import { SyncLogScalarWhereWithAggregatesInputObjectSchema } from './objects/SyncLogScalarWhereWithAggregatesInput.schema';
import { SyncLogScalarFieldEnumSchema } from './enums/SyncLogScalarFieldEnum.schema';
import { SyncLogCountAggregateInputObjectSchema } from './objects/SyncLogCountAggregateInput.schema';
import { SyncLogMinAggregateInputObjectSchema } from './objects/SyncLogMinAggregateInput.schema';
import { SyncLogMaxAggregateInputObjectSchema } from './objects/SyncLogMaxAggregateInput.schema';

export const SyncLogGroupBySchema: z.ZodType<Prisma.SyncLogGroupByArgs> = z.object({ where: SyncLogWhereInputObjectSchema.optional(), orderBy: z.union([SyncLogOrderByWithAggregationInputObjectSchema, SyncLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SyncLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SyncLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional(), _min: SyncLogMinAggregateInputObjectSchema.optional(), _max: SyncLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SyncLogGroupByArgs>;

export const SyncLogGroupByZodSchema = z.object({ where: SyncLogWhereInputObjectSchema.optional(), orderBy: z.union([SyncLogOrderByWithAggregationInputObjectSchema, SyncLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SyncLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SyncLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), SyncLogCountAggregateInputObjectSchema ]).optional(), _min: SyncLogMinAggregateInputObjectSchema.optional(), _max: SyncLogMaxAggregateInputObjectSchema.optional() }).strict();