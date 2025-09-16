import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemPermissionOrderByWithRelationInputObjectSchema } from './objects/SystemPermissionOrderByWithRelationInput.schema';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionCountAggregateInputObjectSchema } from './objects/SystemPermissionCountAggregateInput.schema';
import { SystemPermissionMinAggregateInputObjectSchema } from './objects/SystemPermissionMinAggregateInput.schema';
import { SystemPermissionMaxAggregateInputObjectSchema } from './objects/SystemPermissionMaxAggregateInput.schema';

export const SystemPermissionAggregateSchema: z.ZodType<Prisma.SystemPermissionAggregateArgs> = z.object({ orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SystemPermissionCountAggregateInputObjectSchema ]).optional(), _min: SystemPermissionMinAggregateInputObjectSchema.optional(), _max: SystemPermissionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SystemPermissionAggregateArgs>;

export const SystemPermissionAggregateZodSchema = z.object({ orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SystemPermissionCountAggregateInputObjectSchema ]).optional(), _min: SystemPermissionMinAggregateInputObjectSchema.optional(), _max: SystemPermissionMaxAggregateInputObjectSchema.optional() }).strict();