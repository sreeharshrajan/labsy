import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserOrderByWithRelationInputObjectSchema } from './objects/TenantUserOrderByWithRelationInput.schema';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';
import { TenantUserCountAggregateInputObjectSchema } from './objects/TenantUserCountAggregateInput.schema';

export const TenantUserCountSchema: z.ZodType<Prisma.TenantUserCountArgs> = z.object({ orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserCountArgs>;

export const TenantUserCountZodSchema = z.object({ orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional() }).strict();