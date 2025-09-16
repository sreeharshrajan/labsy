import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageIncludeObjectSchema } from './objects/PageInclude.schema';
import { PageOrderByWithRelationInputObjectSchema } from './objects/PageOrderByWithRelationInput.schema';
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema';
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema';
import { PageScalarFieldEnumSchema } from './enums/PageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageFindManySelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    content: z.boolean().optional(),
    isActive: z.boolean().optional(),
    metaData: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    pageContents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PageSelect>;

export const PageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    content: z.boolean().optional(),
    isActive: z.boolean().optional(),
    metaData: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    pageContents: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PageFindManySchema: z.ZodType<Prisma.PageFindManyArgs> = z.object({ select: PageFindManySelectSchema.optional(), include: z.lazy(() => PageIncludeObjectSchema.optional()), orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageScalarFieldEnumSchema, PageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PageFindManyArgs>;

export const PageFindManyZodSchema = z.object({ select: PageFindManySelectSchema.optional(), include: z.lazy(() => PageIncludeObjectSchema.optional()), orderBy: z.union([PageOrderByWithRelationInputObjectSchema, PageOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageWhereInputObjectSchema.optional(), cursor: PageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageScalarFieldEnumSchema, PageScalarFieldEnumSchema.array()]).optional() }).strict();