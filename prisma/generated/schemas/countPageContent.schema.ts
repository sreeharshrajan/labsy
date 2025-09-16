import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentOrderByWithRelationInputObjectSchema } from './objects/PageContentOrderByWithRelationInput.schema';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';
import { PageContentCountAggregateInputObjectSchema } from './objects/PageContentCountAggregateInput.schema';

export const PageContentCountSchema: z.ZodType<Prisma.PageContentCountArgs> = z.object({ orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PageContentCountArgs>;

export const PageContentCountZodSchema = z.object({ orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional() }).strict();