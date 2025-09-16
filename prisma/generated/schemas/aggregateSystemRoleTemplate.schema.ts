import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemRoleTemplateOrderByWithRelationInputObjectSchema } from './objects/SystemRoleTemplateOrderByWithRelationInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateCountAggregateInputObjectSchema } from './objects/SystemRoleTemplateCountAggregateInput.schema';
import { SystemRoleTemplateMinAggregateInputObjectSchema } from './objects/SystemRoleTemplateMinAggregateInput.schema';
import { SystemRoleTemplateMaxAggregateInputObjectSchema } from './objects/SystemRoleTemplateMaxAggregateInput.schema';

export const SystemRoleTemplateAggregateSchema: z.ZodType<Prisma.SystemRoleTemplateAggregateArgs> = z.object({ orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SystemRoleTemplateCountAggregateInputObjectSchema ]).optional(), _min: SystemRoleTemplateMinAggregateInputObjectSchema.optional(), _max: SystemRoleTemplateMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateAggregateArgs>;

export const SystemRoleTemplateAggregateZodSchema = z.object({ orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SystemRoleTemplateCountAggregateInputObjectSchema ]).optional(), _min: SystemRoleTemplateMinAggregateInputObjectSchema.optional(), _max: SystemRoleTemplateMaxAggregateInputObjectSchema.optional() }).strict();