import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserAddressOrderByWithRelationInputObjectSchema } from './objects/UserAddressOrderByWithRelationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';
import { UserAddressCountAggregateInputObjectSchema } from './objects/UserAddressCountAggregateInput.schema';

export const UserAddressCountSchema: z.ZodType<Prisma.UserAddressCountArgs> = z.object({ orderBy: z.union([UserAddressOrderByWithRelationInputObjectSchema, UserAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAddressWhereInputObjectSchema.optional(), cursor: UserAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserAddressCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserAddressCountArgs>;

export const UserAddressCountZodSchema = z.object({ orderBy: z.union([UserAddressOrderByWithRelationInputObjectSchema, UserAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAddressWhereInputObjectSchema.optional(), cursor: UserAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserAddressCountAggregateInputObjectSchema ]).optional() }).strict();