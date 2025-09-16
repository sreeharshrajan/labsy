import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressOrderByWithRelationInputObjectSchema } from './objects/TenantAddressOrderByWithRelationInput.schema';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';
import { TenantAddressCountAggregateInputObjectSchema } from './objects/TenantAddressCountAggregateInput.schema';
import { TenantAddressMinAggregateInputObjectSchema } from './objects/TenantAddressMinAggregateInput.schema';
import { TenantAddressMaxAggregateInputObjectSchema } from './objects/TenantAddressMaxAggregateInput.schema';

export const TenantAddressAggregateSchema: z.ZodType<Prisma.TenantAddressAggregateArgs> = z.object({ orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional(), _min: TenantAddressMinAggregateInputObjectSchema.optional(), _max: TenantAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantAddressAggregateArgs>;

export const TenantAddressAggregateZodSchema = z.object({ orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional(), _min: TenantAddressMinAggregateInputObjectSchema.optional(), _max: TenantAddressMaxAggregateInputObjectSchema.optional() }).strict();