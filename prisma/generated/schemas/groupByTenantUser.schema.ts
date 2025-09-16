import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';
import { TenantUserOrderByWithAggregationInputObjectSchema } from './objects/TenantUserOrderByWithAggregationInput.schema';
import { TenantUserScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantUserScalarWhereWithAggregatesInput.schema';
import { TenantUserScalarFieldEnumSchema } from './enums/TenantUserScalarFieldEnum.schema';
import { TenantUserCountAggregateInputObjectSchema } from './objects/TenantUserCountAggregateInput.schema';
import { TenantUserMinAggregateInputObjectSchema } from './objects/TenantUserMinAggregateInput.schema';
import { TenantUserMaxAggregateInputObjectSchema } from './objects/TenantUserMaxAggregateInput.schema';

export const TenantUserGroupBySchema: z.ZodType<Prisma.TenantUserGroupByArgs> = z.object({ where: TenantUserWhereInputObjectSchema.optional(), orderBy: z.union([TenantUserOrderByWithAggregationInputObjectSchema, TenantUserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantUserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantUserScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional(), _min: TenantUserMinAggregateInputObjectSchema.optional(), _max: TenantUserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserGroupByArgs>;

export const TenantUserGroupByZodSchema = z.object({ where: TenantUserWhereInputObjectSchema.optional(), orderBy: z.union([TenantUserOrderByWithAggregationInputObjectSchema, TenantUserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantUserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantUserScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantUserCountAggregateInputObjectSchema ]).optional(), _min: TenantUserMinAggregateInputObjectSchema.optional(), _max: TenantUserMaxAggregateInputObjectSchema.optional() }).strict();