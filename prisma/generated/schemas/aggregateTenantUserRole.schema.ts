import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleOrderByWithRelationInputObjectSchema } from './objects/TenantUserRoleOrderByWithRelationInput.schema';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleCountAggregateInputObjectSchema } from './objects/TenantUserRoleCountAggregateInput.schema';
import { TenantUserRoleMinAggregateInputObjectSchema } from './objects/TenantUserRoleMinAggregateInput.schema';
import { TenantUserRoleMaxAggregateInputObjectSchema } from './objects/TenantUserRoleMaxAggregateInput.schema';

export const TenantUserRoleAggregateSchema: z.ZodType<Prisma.TenantUserRoleAggregateArgs> = z.object({ orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantUserRoleMinAggregateInputObjectSchema.optional(), _max: TenantUserRoleMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleAggregateArgs>;

export const TenantUserRoleAggregateZodSchema = z.object({ orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantUserRoleMinAggregateInputObjectSchema.optional(), _max: TenantUserRoleMaxAggregateInputObjectSchema.optional() }).strict();