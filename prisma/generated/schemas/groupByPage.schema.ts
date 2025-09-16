import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema';
import { PageOrderByWithAggregationInputObjectSchema } from './objects/PageOrderByWithAggregationInput.schema';
import { PageScalarWhereWithAggregatesInputObjectSchema } from './objects/PageScalarWhereWithAggregatesInput.schema';
import { PageScalarFieldEnumSchema } from './enums/PageScalarFieldEnum.schema';
import { PageCountAggregateInputObjectSchema } from './objects/PageCountAggregateInput.schema';
import { PageMinAggregateInputObjectSchema } from './objects/PageMinAggregateInput.schema';
import { PageMaxAggregateInputObjectSchema } from './objects/PageMaxAggregateInput.schema';

export const PageGroupBySchema: z.ZodType<Prisma.PageGroupByArgs> = z.object({ where: PageWhereInputObjectSchema.optional(), orderBy: z.union([PageOrderByWithAggregationInputObjectSchema, PageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PageScalarFieldEnumSchema), _count: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional(), _min: PageMinAggregateInputObjectSchema.optional(), _max: PageMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PageGroupByArgs>;

export const PageGroupByZodSchema = z.object({ where: PageWhereInputObjectSchema.optional(), orderBy: z.union([PageOrderByWithAggregationInputObjectSchema, PageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PageScalarFieldEnumSchema), _count: z.union([ z.literal(true), PageCountAggregateInputObjectSchema ]).optional(), _min: PageMinAggregateInputObjectSchema.optional(), _max: PageMaxAggregateInputObjectSchema.optional() }).strict();