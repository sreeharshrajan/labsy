import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryScalarFieldEnumSchema } from './enums/ServiceCategoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceCategoryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ServiceCategorySelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    services: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServiceCategorySelect>;

export const ServiceCategoryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    services: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ServiceCategoryFindFirstOrThrowSchema: z.ZodType<Prisma.ServiceCategoryFindFirstOrThrowArgs> = z.object({ select: ServiceCategoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServiceCategoryIncludeObjectSchema.optional()), orderBy: z.union([ServiceCategoryOrderByWithRelationInputObjectSchema, ServiceCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceCategoryWhereInputObjectSchema.optional(), cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceCategoryScalarFieldEnumSchema, ServiceCategoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceCategoryFindFirstOrThrowArgs>;

export const ServiceCategoryFindFirstOrThrowZodSchema = z.object({ select: ServiceCategoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServiceCategoryIncludeObjectSchema.optional()), orderBy: z.union([ServiceCategoryOrderByWithRelationInputObjectSchema, ServiceCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceCategoryWhereInputObjectSchema.optional(), cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceCategoryScalarFieldEnumSchema, ServiceCategoryScalarFieldEnumSchema.array()]).optional() }).strict();