import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';
import { ServiceOrderByWithAggregationInputObjectSchema } from './objects/ServiceOrderByWithAggregationInput.schema';
import { ServiceScalarWhereWithAggregatesInputObjectSchema } from './objects/ServiceScalarWhereWithAggregatesInput.schema';
import { ServiceScalarFieldEnumSchema } from './enums/ServiceScalarFieldEnum.schema';
import { ServiceCountAggregateInputObjectSchema } from './objects/ServiceCountAggregateInput.schema';
import { ServiceMinAggregateInputObjectSchema } from './objects/ServiceMinAggregateInput.schema';
import { ServiceMaxAggregateInputObjectSchema } from './objects/ServiceMaxAggregateInput.schema';
import { ServiceAvgAggregateInputObjectSchema } from './objects/ServiceAvgAggregateInput.schema';
import { ServiceSumAggregateInputObjectSchema } from './objects/ServiceSumAggregateInput.schema';

export const ServiceGroupBySchema: z.ZodType<Prisma.ServiceGroupByArgs> = z.object({ where: ServiceWhereInputObjectSchema.optional(), orderBy: z.union([ServiceOrderByWithAggregationInputObjectSchema, ServiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceGroupByArgs>;

export const ServiceGroupByZodSchema = z.object({ where: ServiceWhereInputObjectSchema.optional(), orderBy: z.union([ServiceOrderByWithAggregationInputObjectSchema, ServiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict();