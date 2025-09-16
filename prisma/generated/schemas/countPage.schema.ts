import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageOrderByWithRelationInputObjectSchema } from './objects/PageOrderByWithRelationInput.schema';
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema';
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema';
import { PageCountAggregateInputObjectSchema } from './objects/PageCountAggregateInput.schema';

export const PageCountSchema: z.ZodType<Prisma.PageCountArgs> = z.object({ orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PageCountArgs>;

export const PageCountZodSchema = z.object({ orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional() }).strict();