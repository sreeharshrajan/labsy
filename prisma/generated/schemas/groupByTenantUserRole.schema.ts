import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';
import { TenantUserRoleOrderByWithAggregationInputObjectSchema } from './objects/TenantUserRoleOrderByWithAggregationInput.schema';
import { TenantUserRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantUserRoleScalarWhereWithAggregatesInput.schema';
import { TenantUserRoleScalarFieldEnumSchema } from './enums/TenantUserRoleScalarFieldEnum.schema';
import { TenantUserRoleCountAggregateInputObjectSchema } from './objects/TenantUserRoleCountAggregateInput.schema';
import { TenantUserRoleMinAggregateInputObjectSchema } from './objects/TenantUserRoleMinAggregateInput.schema';
import { TenantUserRoleMaxAggregateInputObjectSchema } from './objects/TenantUserRoleMaxAggregateInput.schema';

export const TenantUserRoleGroupBySchema: z.ZodType<Prisma.TenantUserRoleGroupByArgs> = z.object({ where: TenantUserRoleWhereInputObjectSchema.optional(), orderBy: z.union([TenantUserRoleOrderByWithAggregationInputObjectSchema, TenantUserRoleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantUserRoleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantUserRoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantUserRoleMinAggregateInputObjectSchema.optional(), _max: TenantUserRoleMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleGroupByArgs>;

export const TenantUserRoleGroupByZodSchema = z.object({ where: TenantUserRoleWhereInputObjectSchema.optional(), orderBy: z.union([TenantUserRoleOrderByWithAggregationInputObjectSchema, TenantUserRoleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantUserRoleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantUserRoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantUserRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantUserRoleMinAggregateInputObjectSchema.optional(), _max: TenantUserRoleMaxAggregateInputObjectSchema.optional() }).strict();