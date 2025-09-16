import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingValueSelectObjectSchema } from './objects/AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';

export const AppSettingValueFindUniqueSchema: z.ZodType<Prisma.AppSettingValueFindUniqueArgs> = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), where: AppSettingValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppSettingValueFindUniqueArgs>;

export const AppSettingValueFindUniqueZodSchema = z.object({ select: AppSettingValueSelectObjectSchema.optional(), include: AppSettingValueIncludeObjectSchema.optional(), where: AppSettingValueWhereUniqueInputObjectSchema }).strict();