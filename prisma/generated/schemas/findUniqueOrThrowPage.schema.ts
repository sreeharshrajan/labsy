import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PageSelectObjectSchema } from './objects/PageSelect.schema';
import { PageIncludeObjectSchema } from './objects/PageInclude.schema';
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema';

export const PageFindUniqueOrThrowSchema: z.ZodType<Prisma.PageFindUniqueOrThrowArgs> = z.object({ select: PageSelectObjectSchema.optional(), include: PageIncludeObjectSchema.optional(), where: PageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PageFindUniqueOrThrowArgs>;

export const PageFindUniqueOrThrowZodSchema = z.object({ select: PageSelectObjectSchema.optional(), include: PageIncludeObjectSchema.optional(), where: PageWhereUniqueInputObjectSchema }).strict();