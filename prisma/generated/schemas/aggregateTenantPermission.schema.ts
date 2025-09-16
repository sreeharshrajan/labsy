import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantPermissionOrderByWithRelationInputObjectSchema } from './objects/TenantPermissionOrderByWithRelationInput.schema';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionCountAggregateInputObjectSchema } from './objects/TenantPermissionCountAggregateInput.schema';
import { TenantPermissionMinAggregateInputObjectSchema } from './objects/TenantPermissionMinAggregateInput.schema';
import { TenantPermissionMaxAggregateInputObjectSchema } from './objects/TenantPermissionMaxAggregateInput.schema';

export const TenantPermissionAggregateSchema: z.ZodType<Prisma.TenantPermissionAggregateArgs> = z.object({ orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantPermissionCountAggregateInputObjectSchema ]).optional(), _min: TenantPermissionMinAggregateInputObjectSchema.optional(), _max: TenantPermissionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantPermissionAggregateArgs>;

export const TenantPermissionAggregateZodSchema = z.object({ orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantPermissionCountAggregateInputObjectSchema ]).optional(), _min: TenantPermissionMinAggregateInputObjectSchema.optional(), _max: TenantPermissionMaxAggregateInputObjectSchema.optional() }).strict();