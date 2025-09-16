import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';
import { PageContentOrderByWithAggregationInputObjectSchema } from './objects/PageContentOrderByWithAggregationInput.schema';
import { PageContentScalarWhereWithAggregatesInputObjectSchema } from './objects/PageContentScalarWhereWithAggregatesInput.schema';
import { PageContentScalarFieldEnumSchema } from './enums/PageContentScalarFieldEnum.schema';
import { PageContentCountAggregateInputObjectSchema } from './objects/PageContentCountAggregateInput.schema';
import { PageContentMinAggregateInputObjectSchema } from './objects/PageContentMinAggregateInput.schema';
import { PageContentMaxAggregateInputObjectSchema } from './objects/PageContentMaxAggregateInput.schema';

export const PageContentGroupBySchema: z.ZodType<Prisma.PageContentGroupByArgs> = z.object({ where: PageContentWhereInputObjectSchema.optional(), orderBy: z.union([PageContentOrderByWithAggregationInputObjectSchema, PageContentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PageContentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PageContentScalarFieldEnumSchema), _count: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional(), _min: PageContentMinAggregateInputObjectSchema.optional(), _max: PageContentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageContentGroupByArgs>;

export const PageContentGroupByZodSchema = z.object({ where: PageContentWhereInputObjectSchema.optional(), orderBy: z.union([PageContentOrderByWithAggregationInputObjectSchema, PageContentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PageContentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PageContentScalarFieldEnumSchema), _count: z.union([ z.literal(true), PageContentCountAggregateInputObjectSchema ]).optional(), _min: PageContentMinAggregateInputObjectSchema.optional(), _max: PageContentMaxAggregateInputObjectSchema.optional() }).strict();