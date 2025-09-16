import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleOrderByWithRelationInputObjectSchema } from './objects/TenantUserRoleOrderByWithRelationInput.schema';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleCountAggregateInputObjectSchema } from './objects/TenantUserRoleCountAggregateInput.schema';

export const TenantUserRoleCountSchema: z.ZodType<Prisma.TenantUserRoleCountArgs> = z.object({ orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleCountArgs>;

export const TenantUserRoleCountZodSchema = z.object({ orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional() }).strict();