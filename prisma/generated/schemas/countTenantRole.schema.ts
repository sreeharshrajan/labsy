import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleOrderByWithRelationInputObjectSchema } from './objects/TenantRoleOrderByWithRelationInput.schema';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';
import { TenantRoleCountAggregateInputObjectSchema } from './objects/TenantRoleCountAggregateInput.schema';

export const TenantRoleCountSchema: z.ZodType<Prisma.TenantRoleCountArgs> = z.object({ orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantRoleCountArgs>;

export const TenantRoleCountZodSchema = z.object({ orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional() }).strict();