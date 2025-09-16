import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemPermissionOrderByWithRelationInputObjectSchema } from './objects/SystemPermissionOrderByWithRelationInput.schema';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionCountAggregateInputObjectSchema } from './objects/SystemPermissionCountAggregateInput.schema';

export const SystemPermissionCountSchema: z.ZodType<Prisma.SystemPermissionCountArgs> = z.object({ orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SystemPermissionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SystemPermissionCountArgs>;

export const SystemPermissionCountZodSchema = z.object({ orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SystemPermissionCountAggregateInputObjectSchema ]).optional() }).strict();