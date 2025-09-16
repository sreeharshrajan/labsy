import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CustomerAddressWhereInputObjectSchema } from './objects/CustomerAddressWhereInput.schema';
import { CustomerAddressOrderByWithAggregationInputObjectSchema } from './objects/CustomerAddressOrderByWithAggregationInput.schema';
import { CustomerAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/CustomerAddressScalarWhereWithAggregatesInput.schema';
import { CustomerAddressScalarFieldEnumSchema } from './enums/CustomerAddressScalarFieldEnum.schema';
import { CustomerAddressCountAggregateInputObjectSchema } from './objects/CustomerAddressCountAggregateInput.schema';
import { CustomerAddressMinAggregateInputObjectSchema } from './objects/CustomerAddressMinAggregateInput.schema';
import { CustomerAddressMaxAggregateInputObjectSchema } from './objects/CustomerAddressMaxAggregateInput.schema';

export const CustomerAddressGroupBySchema: z.ZodType<Prisma.CustomerAddressGroupByArgs> = z.object({ where: CustomerAddressWhereInputObjectSchema.optional(), orderBy: z.union([CustomerAddressOrderByWithAggregationInputObjectSchema, CustomerAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomerAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomerAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional(), _min: CustomerAddressMinAggregateInputObjectSchema.optional(), _max: CustomerAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerAddressGroupByArgs>;

export const CustomerAddressGroupByZodSchema = z.object({ where: CustomerAddressWhereInputObjectSchema.optional(), orderBy: z.union([CustomerAddressOrderByWithAggregationInputObjectSchema, CustomerAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CustomerAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CustomerAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), CustomerAddressCountAggregateInputObjectSchema ]).optional(), _min: CustomerAddressMinAggregateInputObjectSchema.optional(), _max: CustomerAddressMaxAggregateInputObjectSchema.optional() }).strict();