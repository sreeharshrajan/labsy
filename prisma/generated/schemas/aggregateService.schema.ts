import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceOrderByWithRelationInputObjectSchema } from './objects/ServiceOrderByWithRelationInput.schema';
import { ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceCountAggregateInputObjectSchema } from './objects/ServiceCountAggregateInput.schema';
import { ServiceMinAggregateInputObjectSchema } from './objects/ServiceMinAggregateInput.schema';
import { ServiceMaxAggregateInputObjectSchema } from './objects/ServiceMaxAggregateInput.schema';
import { ServiceAvgAggregateInputObjectSchema } from './objects/ServiceAvgAggregateInput.schema';
import { ServiceSumAggregateInputObjectSchema } from './objects/ServiceSumAggregateInput.schema';

export const ServiceAggregateSchema: z.ZodType<Prisma.ServiceAggregateArgs> = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceAggregateArgs>;

export const ServiceAggregateZodSchema = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict();