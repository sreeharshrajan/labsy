import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressOrderByWithAggregationInputObjectSchema } from './objects/UserAddressOrderByWithAggregationInput.schema';
import { UserAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/UserAddressScalarWhereWithAggregatesInput.schema';
import { UserAddressScalarFieldEnumSchema } from './enums/UserAddressScalarFieldEnum.schema';
import { UserAddressCountAggregateInputObjectSchema } from './objects/UserAddressCountAggregateInput.schema';
import { UserAddressMinAggregateInputObjectSchema } from './objects/UserAddressMinAggregateInput.schema';
import { UserAddressMaxAggregateInputObjectSchema } from './objects/UserAddressMaxAggregateInput.schema';

export const UserAddressGroupBySchema: z.ZodType<Prisma.UserAddressGroupByArgs> = z.object({ where: UserAddressWhereInputObjectSchema.optional(), orderBy: z.union([UserAddressOrderByWithAggregationInputObjectSchema, UserAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserAddressCountAggregateInputObjectSchema ]).optional(), _min: UserAddressMinAggregateInputObjectSchema.optional(), _max: UserAddressMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAddressGroupByArgs>;

export const UserAddressGroupByZodSchema = z.object({ where: UserAddressWhereInputObjectSchema.optional(), orderBy: z.union([UserAddressOrderByWithAggregationInputObjectSchema, UserAddressOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserAddressScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserAddressScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserAddressCountAggregateInputObjectSchema ]).optional(), _min: UserAddressMinAggregateInputObjectSchema.optional(), _max: UserAddressMaxAggregateInputObjectSchema.optional() }).strict();