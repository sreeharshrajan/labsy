import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceCategoryOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCountAggregateInputObjectSchema } from './objects/ServiceCategoryCountAggregateInput.schema';
import { ServiceCategoryMinAggregateInputObjectSchema } from './objects/ServiceCategoryMinAggregateInput.schema';
import { ServiceCategoryMaxAggregateInputObjectSchema } from './objects/ServiceCategoryMaxAggregateInput.schema';

export const ServiceCategoryAggregateSchema: z.ZodType<Prisma.ServiceCategoryAggregateArgs> = z.object({ orderBy: z.union([ServiceCategoryOrderByWithRelationInputObjectSchema, ServiceCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceCategoryWhereInputObjectSchema.optional(), cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCategoryCountAggregateInputObjectSchema ]).optional(), _min: ServiceCategoryMinAggregateInputObjectSchema.optional(), _max: ServiceCategoryMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceCategoryAggregateArgs>;

export const ServiceCategoryAggregateZodSchema = z.object({ orderBy: z.union([ServiceCategoryOrderByWithRelationInputObjectSchema, ServiceCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceCategoryWhereInputObjectSchema.optional(), cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCategoryCountAggregateInputObjectSchema ]).optional(), _min: ServiceCategoryMinAggregateInputObjectSchema.optional(), _max: ServiceCategoryMaxAggregateInputObjectSchema.optional() }).strict();