import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserOrderByWithRelationInputObjectSchema } from './objects/TenantUserOrderByWithRelationInput.schema';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';
import { TenantUserCountAggregateInputObjectSchema } from './objects/TenantUserCountAggregateInput.schema';
import { TenantUserMinAggregateInputObjectSchema } from './objects/TenantUserMinAggregateInput.schema';
import { TenantUserMaxAggregateInputObjectSchema } from './objects/TenantUserMaxAggregateInput.schema';

export const TenantUserAggregateSchema: z.ZodType<Prisma.TenantUserAggregateArgs> = z.object({ orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional(), _min: TenantUserMinAggregateInputObjectSchema.optional(), _max: TenantUserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserAggregateArgs>;

export const TenantUserAggregateZodSchema = z.object({ orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional(), _min: TenantUserMinAggregateInputObjectSchema.optional(), _max: TenantUserMaxAggregateInputObjectSchema.optional() }).strict();