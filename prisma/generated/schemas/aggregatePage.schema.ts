import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageOrderByWithRelationInputObjectSchema } from './objects/PageOrderByWithRelationInput.schema';
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema';
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema';
import { PageCountAggregateInputObjectSchema } from './objects/PageCountAggregateInput.schema';
import { PageMinAggregateInputObjectSchema } from './objects/PageMinAggregateInput.schema';
import { PageMaxAggregateInputObjectSchema } from './objects/PageMaxAggregateInput.schema';

export const PageAggregateSchema: z.ZodType<Prisma.PageAggregateArgs> = z.object({ orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional(), _min: PageMinAggregateInputObjectSchema.optional(), _max: PageMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageAggregateArgs>;

export const PageAggregateZodSchema = z.object({ orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional(), _min: PageMinAggregateInputObjectSchema.optional(), _max: PageMaxAggregateInputObjectSchema.optional() }).strict();