import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressOrderByWithRelationInputObjectSchema } from './objects/TenantAddressOrderByWithRelationInput.schema';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';
import { TenantAddressCountAggregateInputObjectSchema } from './objects/TenantAddressCountAggregateInput.schema';

export const TenantAddressCountSchema: z.ZodType<Prisma.TenantAddressCountArgs> = z.object({ orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantAddressCountArgs>;

export const TenantAddressCountZodSchema = z.object({ orderBy: z.union([TenantAddressOrderByWithRelationInputObjectSchema, TenantAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantAddressWhereInputObjectSchema.optional(), cursor: TenantAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional() }).strict();