import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';

export const AppConfigFindUniqueSchema: z.ZodType<Prisma.AppConfigFindUniqueArgs> = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppConfigFindUniqueArgs>;

export const AppConfigFindUniqueZodSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema }).strict();