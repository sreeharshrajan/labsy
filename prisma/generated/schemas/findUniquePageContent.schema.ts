import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';

export const PageContentFindUniqueSchema: z.ZodType<Prisma.PageContentFindUniqueArgs> = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageContentFindUniqueArgs>;

export const PageContentFindUniqueZodSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema }).strict();