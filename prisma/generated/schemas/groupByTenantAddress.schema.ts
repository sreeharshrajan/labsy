import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';
import { TenantAddressOrderByWithAggregationInputObjectSchema } from './objects/TenantAddressOrderByWithAggregationInput.schema';
import { TenantAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantAddressScalarWhereWithAggregatesInput.schema';
import { TenantAddressScalarFieldEnumSchema } from './enums/TenantAddressScalarFieldEnum.schema';
import { TenantAddressCountAggregateInputObjectSchema } from './objects/TenantAddressCountAggregateInput.schema';
import { TenantAddressMinAggregateInputObjectSchema } from './objects/TenantAddressMinAggregateInput.schema';
import { TenantAddressMaxAggregateInputObjectSchema } from './objects/TenantAddressMaxAggregateInput.schema';

export const TenantAddressGroupBySchema: z.ZodType<Prisma.TenantAddressGroupByArgs> = z.object({ where: TenantAddressWhereInputObjectSchema.optional(), orderBy: z.union([TenantAddressOrderByWithAggregationInputObjectSchema, TenantAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional(), _min: TenantAddressMinAggregateInputObjectSchema.optional(), _max: TenantAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantAddressGroupByArgs>;

export const TenantAddressGroupByZodSchema = z.object({ where: TenantAddressWhereInputObjectSchema.optional(), orderBy: z.union([TenantAddressOrderByWithAggregationInputObjectSchema, TenantAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantAddressCountAggregateInputObjectSchema ]).optional(), _min: TenantAddressMinAggregateInputObjectSchema.optional(), _max: TenantAddressMaxAggregateInputObjectSchema.optional() }).strict();