import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryOrderByWithAggregationInputObjectSchema } from './objects/ServiceCategoryOrderByWithAggregationInput.schema';
import { ServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from './objects/ServiceCategoryScalarWhereWithAggregatesInput.schema';
import { ServiceCategoryScalarFieldEnumSchema } from './enums/ServiceCategoryScalarFieldEnum.schema';
import { ServiceCategoryCountAggregateInputObjectSchema } from './objects/ServiceCategoryCountAggregateInput.schema';
import { ServiceCategoryMinAggregateInputObjectSchema } from './objects/ServiceCategoryMinAggregateInput.schema';
import { ServiceCategoryMaxAggregateInputObjectSchema } from './objects/ServiceCategoryMaxAggregateInput.schema';

export const ServiceCategoryGroupBySchema: z.ZodType<Prisma.ServiceCategoryGroupByArgs> = z.object({ where: ServiceCategoryWhereInputObjectSchema.optional(), orderBy: z.union([ServiceCategoryOrderByWithAggregationInputObjectSchema, ServiceCategoryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceCategoryScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCategoryCountAggregateInputObjectSchema ]).optional(), _min: ServiceCategoryMinAggregateInputObjectSchema.optional(), _max: ServiceCategoryMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceCategoryGroupByArgs>;

export const ServiceCategoryGroupByZodSchema = z.object({ where: ServiceCategoryWhereInputObjectSchema.optional(), orderBy: z.union([ServiceCategoryOrderByWithAggregationInputObjectSchema, ServiceCategoryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceCategoryScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCategoryCountAggregateInputObjectSchema ]).optional(), _min: ServiceCategoryMinAggregateInputObjectSchema.optional(), _max: ServiceCategoryMaxAggregateInputObjectSchema.optional() }).strict();