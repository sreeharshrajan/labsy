import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostOrderByWithAggregationInputObjectSchema } from './objects/PostOrderByWithAggregationInput.schema';
import { PostScalarWhereWithAggregatesInputObjectSchema } from './objects/PostScalarWhereWithAggregatesInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema';
import { PostCountAggregateInputObjectSchema } from './objects/PostCountAggregateInput.schema';
import { PostMinAggregateInputObjectSchema } from './objects/PostMinAggregateInput.schema';
import { PostMaxAggregateInputObjectSchema } from './objects/PostMaxAggregateInput.schema';

export const PostGroupBySchema: z.ZodType<Prisma.PostGroupByArgs> = z.object({ where: PostWhereInputObjectSchema.optional(), orderBy: z.union([PostOrderByWithAggregationInputObjectSchema, PostOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PostScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PostScalarFieldEnumSchema), _count: z.union([ z.literal(true), PostCountAggregateInputObjectSchema ]).optional(), _min: PostMinAggregateInputObjectSchema.optional(), _max: PostMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PostGroupByArgs>;

export const PostGroupByZodSchema = z.object({ where: PostWhereInputObjectSchema.optional(), orderBy: z.union([PostOrderByWithAggregationInputObjectSchema, PostOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PostScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PostScalarFieldEnumSchema), _count: z.union([ z.literal(true), PostCountAggregateInputObjectSchema ]).optional(), _min: PostMinAggregateInputObjectSchema.optional(), _max: PostMaxAggregateInputObjectSchema.optional() }).strict();