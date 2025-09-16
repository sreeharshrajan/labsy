import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema';
import { AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';
import { AccountCountAggregateInputObjectSchema } from './objects/AccountCountAggregateInput.schema';

export const AccountCountSchema: z.ZodType<Prisma.AccountCountArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountCountArgs>;

export const AccountCountZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict();