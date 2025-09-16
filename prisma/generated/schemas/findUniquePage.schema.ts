import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageSelectObjectSchema } from './objects/PageSelect.schema';
import { PageIncludeObjectSchema } from './objects/PageInclude.schema';
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema';

export const PageFindUniqueSchema: z.ZodType<Prisma.PageFindUniqueArgs> = z.object({ select: PageSelectObjectSchema.optional(), include: PageIncludeObjectSchema.optional(), where: PageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageFindUniqueArgs>;

export const PageFindUniqueZodSchema = z.object({ select: PageSelectObjectSchema.optional(), include: PageIncludeObjectSchema.optional(), where: PageWhereUniqueInputObjectSchema }).strict();