import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerOrderByWithAggregationInputObjectSchema } from './objects/CustomerOrderByWithAggregationInput.schema';
import { CustomerScalarWhereWithAggregatesInputObjectSchema } from './objects/CustomerScalarWhereWithAggregatesInput.schema';
import { CustomerScalarFieldEnumSchema } from './enums/CustomerScalarFieldEnum.schema';
import { CustomerCountAggregateInputObjectSchema } from './objects/CustomerCountAggregateInput.schema';
import { CustomerMinAggregateInputObjectSchema } from './objects/CustomerMinAggregateInput.schema';
import { CustomerMaxAggregateInputObjectSchema } from './objects/CustomerMaxAggregateInput.schema';

export const CustomerGroupBySchema: z.ZodType<Prisma.CustomerGroupByArgs> = z.object({ where: CustomerWhereInputObjectSchema.optional(), orderBy: z.union([CustomerOrderByWithAggregationInputObjectSchema, CustomerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomerScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomerCountAggregateInputObjectSchema ]).optional(), _min: CustomerMinAggregateInputObjectSchema.optional(), _max: CustomerMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerGroupByArgs>;

export const CustomerGroupByZodSchema = z.object({ where: CustomerWhereInputObjectSchema.optional(), orderBy: z.union([CustomerOrderByWithAggregationInputObjectSchema, CustomerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomerScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomerCountAggregateInputObjectSchema ]).optional(), _min: CustomerMinAggregateInputObjectSchema.optional(), _max: CustomerMaxAggregateInputObjectSchema.optional() }).strict();