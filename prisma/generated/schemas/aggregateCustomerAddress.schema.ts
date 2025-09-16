import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerAddressOrderByWithRelationInputObjectSchema } from './objects/CustomerAddressOrderByWithRelationInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCountAggregateInputObjectSchema } from './objects/CustomerAddressCountAggregateInput.schema';
import { CustomerAddressMinAggregateInputObjectSchema } from './objects/CustomerAddressMinAggregateInput.schema';
import { CustomerAddressMaxAggregateInputObjectSchema } from './objects/CustomerAddressMaxAggregateInput.schema';

export const CustomerAddressAggregateSchema: z.ZodType<Prisma.CustomerAddressAggregateArgs> = z.object({ orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional(), _min: CustomerAddressMinAggregateInputObjectSchema.optional(), _max: CustomerAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerAddressAggregateArgs>;

export const CustomerAddressAggregateZodSchema = z.object({ orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional(), _min: CustomerAddressMinAggregateInputObjectSchema.optional(), _max: CustomerAddressMaxAggregateInputObjectSchema.optional() }).strict();