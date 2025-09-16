import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerAddressOrderByWithRelationInputObjectSchema } from './objects/CustomerAddressOrderByWithRelationInput.schema';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './objects/CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressCountAggregateInputObjectSchema } from './objects/CustomerAddressCountAggregateInput.schema';

export const CustomerAddressCountSchema: z.ZodType<Prisma.CustomerAddressCountArgs> = z.object({ orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomerAddressCountArgs>;

export const CustomerAddressCountZodSchema = z.object({ orderBy: z.union([CustomerAddressOrderByWithRelationInputObjectSchema, CustomerAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerAddressWhereInputObjectSchema.optional(), cursor: CustomerAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional() }).strict();