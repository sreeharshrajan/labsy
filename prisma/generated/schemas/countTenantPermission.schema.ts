import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantPermissionOrderByWithRelationInputObjectSchema } from './objects/TenantPermissionOrderByWithRelationInput.schema';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionCountAggregateInputObjectSchema } from './objects/TenantPermissionCountAggregateInput.schema';

export const TenantPermissionCountSchema: z.ZodType<Prisma.TenantPermissionCountArgs> = z.object({ orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantPermissionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantPermissionCountArgs>;

export const TenantPermissionCountZodSchema = z.object({ orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantPermissionCountAggregateInputObjectSchema ]).optional() }).strict();