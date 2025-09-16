import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigSelectObjectSchema } from './objects/AppConfigSelect.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';

export const AppConfigFindUniqueOrThrowSchema: z.ZodType<Prisma.AppConfigFindUniqueOrThrowArgs> = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppConfigFindUniqueOrThrowArgs>;

export const AppConfigFindUniqueOrThrowZodSchema = z.object({ select: AppConfigSelectObjectSchema.optional(),  where: AppConfigWhereUniqueInputObjectSchema }).strict();