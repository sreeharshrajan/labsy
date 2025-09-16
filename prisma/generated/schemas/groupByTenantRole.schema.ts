import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';
import { TenantRoleOrderByWithAggregationInputObjectSchema } from './objects/TenantRoleOrderByWithAggregationInput.schema';
import { TenantRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantRoleScalarWhereWithAggregatesInput.schema';
import { TenantRoleScalarFieldEnumSchema } from './enums/TenantRoleScalarFieldEnum.schema';
import { TenantRoleCountAggregateInputObjectSchema } from './objects/TenantRoleCountAggregateInput.schema';
import { TenantRoleMinAggregateInputObjectSchema } from './objects/TenantRoleMinAggregateInput.schema';
import { TenantRoleMaxAggregateInputObjectSchema } from './objects/TenantRoleMaxAggregateInput.schema';

export const TenantRoleGroupBySchema: z.ZodType<Prisma.TenantRoleGroupByArgs> = z.object({ where: TenantRoleWhereInputObjectSchema.optional(), orderBy: z.union([TenantRoleOrderByWithAggregationInputObjectSchema, TenantRoleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantRoleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantRoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantRoleMinAggregateInputObjectSchema.optional(), _max: TenantRoleMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantRoleGroupByArgs>;

export const TenantRoleGroupByZodSchema = z.object({ where: TenantRoleWhereInputObjectSchema.optional(), orderBy: z.union([TenantRoleOrderByWithAggregationInputObjectSchema, TenantRoleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantRoleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantRoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantRoleCountAggregateInputObjectSchema ]).optional(), _min: TenantRoleMinAggregateInputObjectSchema.optional(), _max: TenantRoleMaxAggregateInputObjectSchema.optional() }).strict();