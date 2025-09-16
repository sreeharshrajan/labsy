import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';

export const PageContentFindUniqueOrThrowSchema: z.ZodType<Prisma.PageContentFindUniqueOrThrowArgs> = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageContentFindUniqueOrThrowArgs>;

export const PageContentFindUniqueOrThrowZodSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema }).strict();