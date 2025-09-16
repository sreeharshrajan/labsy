import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingSelectObjectSchema } from './objects/AppSettingSelect.schema';
import { AppSettingIncludeObjectSchema } from './objects/AppSettingInclude.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './objects/AppSettingWhereUniqueInput.schema';

export const AppSettingFindUniqueOrThrowSchema: z.ZodType<Prisma.AppSettingFindUniqueOrThrowArgs> = z.object({ select: AppSettingSelectObjectSchema.optional(), include: AppSettingIncludeObjectSchema.optional(), where: AppSettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppSettingFindUniqueOrThrowArgs>;

export const AppSettingFindUniqueOrThrowZodSchema = z.object({ select: AppSettingSelectObjectSchema.optional(), include: AppSettingIncludeObjectSchema.optional(), where: AppSettingWhereUniqueInputObjectSchema }).strict();