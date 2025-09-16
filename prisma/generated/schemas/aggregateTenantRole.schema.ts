import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleOrderByWithRelationInputObjectSchema } from './objects/TenantRoleOrderByWithRelationInput.schema';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';
import { TenantRoleCountAggregateInputObjectSchema } from './objects/TenantRoleCountAggregateInput.schema';
import { TenantRoleMinAggregateInputObjectSchema } from './objects/TenantRoleMinAggregateInput.schema';
import { TenantRoleMaxAggregateInputObjectSchema } from './objects/TenantRoleMaxAggregateInput.schema';

export const TenantRoleAggregateSchema: z.ZodType<Prisma.TenantRoleAggregateArgs> = z.object({ orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantRoleMinAggregateInputObjectSchema.optional(), _max: TenantRoleMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantRoleAggregateArgs>;

export const TenantRoleAggregateZodSchema = z.object({ orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantRoleMinAggregateInputObjectSchema.optional(), _max: TenantRoleMaxAggregateInputObjectSchema.optional() }).strict();