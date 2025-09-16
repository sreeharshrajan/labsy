import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentOrderByWithRelationInputObjectSchema } from './objects/PageContentOrderByWithRelationInput.schema';
import { PageContentWhereInputObjectSchema } from './objects/PageContentWhereInput.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';
import { PageContentScalarFieldEnumSchema } from './enums/PageContentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageContentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PageContentSelect> = z.object({
    id: z.boolean().optional(),
    section: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Page: z.boolean().optional(),
    pageId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PageContentSelect>;

export const PageContentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    section: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    Page: z.boolean().optional(),
    pageId: z.boolean().optional()
  }).strict();

export const PageContentFindFirstOrThrowSchema: z.ZodType<Prisma.PageContentFindFirstOrThrowArgs> = z.object({ select: PageContentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PageContentIncludeObjectSchema.optional()), orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageContentScalarFieldEnumSchema, PageContentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PageContentFindFirstOrThrowArgs>;

export const PageContentFindFirstOrThrowZodSchema = z.object({ select: PageContentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PageContentIncludeObjectSchema.optional()), orderBy: z.union([PageContentOrderByWithRelationInputObjectSchema, PageContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageContentWhereInputObjectSchema.optional(), cursor: PageContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageContentScalarFieldEnumSchema, PageContentScalarFieldEnumSchema.array()]).optional() }).strict();