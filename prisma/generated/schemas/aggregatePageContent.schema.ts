import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentOrderByWithRelationInputObjectSchema } from './objects/PageContentOrderByWithRelationInput.schema';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';
import { PageContentCountAggregateInputObjectSchema } from './objects/PageContentCountAggregateInput.schema';
import { PageContentMinAggregateInputObjectSchema } from './objects/PageContentMinAggregateInput.schema';
import { PageContentMaxAggregateInputObjectSchema } from './objects/PageContentMaxAggregateInput.schema';

export const PageContentAggregateSchema: z.ZodType<Prisma.PageContentAggregateArgs> = z.object({ orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional(), _min: PageContentMinAggregateInputObjectSchema.optional(), _max: PageContentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageContentAggregateArgs>;

export const PageContentAggregateZodSchema = z.object({ orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional(), _min: PageContentMinAggregateInputObjectSchema.optional(), _max: PageContentMaxAggregateInputObjectSchema.optional() }).strict();