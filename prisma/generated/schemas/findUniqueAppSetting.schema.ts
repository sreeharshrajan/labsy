import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingSelectObjectSchema } from './objects/AppSettingSelect.schema';
import { AppSettingIncludeObjectSchema } from './objects/AppSettingInclude.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './objects/AppSettingWhereUniqueInput.schema';

export const AppSettingFindUniqueSchema: z.ZodType<Prisma.AppSettingFindUniqueArgs> = z.object({ select: AppSettingSelectObjectSchema.optional(), include: AppSettingIncludeObjectSchema.optional(), where: AppSettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppSettingFindUniqueArgs>;

export const AppSettingFindUniqueZodSchema = z.object({ select: AppSettingSelectObjectSchema.optional(), include: AppSettingIncludeObjectSchema.optional(), where: AppSettingWhereUniqueInputObjectSchema }).strict();