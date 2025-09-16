import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationFindManySelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    type: z.boolean().optional(),
    title: z.boolean().optional(),
    message: z.boolean().optional(),
    isRead: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    readAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NotificationSelect>;

export const NotificationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    type: z.boolean().optional(),
    title: z.boolean().optional(),
    message: z.boolean().optional(),
    isRead: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    readAt: z.boolean().optional()
  }).strict();

export const NotificationFindManySchema: z.ZodType<Prisma.NotificationFindManyArgs> = z.object({ select: NotificationFindManySelectSchema.optional(), include: z.lazy(() => NotificationIncludeObjectSchema.optional()), orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationFindManyArgs>;

export const NotificationFindManyZodSchema = z.object({ select: NotificationFindManySelectSchema.optional(), include: z.lazy(() => NotificationIncludeObjectSchema.optional()), orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationScalarFieldEnumSchema, NotificationScalarFieldEnumSchema.array()]).optional() }).strict();