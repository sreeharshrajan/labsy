import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemRoleTemplateOrderByWithRelationInputObjectSchema } from './objects/SystemRoleTemplateOrderByWithRelationInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateCountAggregateInputObjectSchema } from './objects/SystemRoleTemplateCountAggregateInput.schema';

export const SystemRoleTemplateCountSchema: z.ZodType<Prisma.SystemRoleTemplateCountArgs> = z.object({ orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SystemRoleTemplateCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateCountArgs>;

export const SystemRoleTemplateCountZodSchema = z.object({ orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SystemRoleTemplateCountAggregateInputObjectSchema ]).optional() }).strict();