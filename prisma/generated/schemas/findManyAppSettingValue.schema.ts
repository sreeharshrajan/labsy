import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingValueIncludeObjectSchema } from './objects/AppSettingValueInclude.schema';
import { AppSettingValueOrderByWithRelationInputObjectSchema } from './objects/AppSettingValueOrderByWithRelationInput.schema';
import { AppSettingValueWhereInputObjectSchema } from './objects/AppSettingValueWhereInput.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './objects/AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueScalarFieldEnumSchema } from './enums/AppSettingValueScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppSettingValueFindManySelectSchema: z.ZodType<Prisma.AppSettingValueSelect> = z.object({
    id: z.boolean().optional(),
    settingId: z.boolean().optional(),
    setting: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AppSettingValueSelect>;

export const AppSettingValueFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    settingId: z.boolean().optional(),
    setting: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict();

export const AppSettingValueFindManySchema: z.ZodType<Prisma.AppSettingValueFindManyArgs> = z.object({ select: AppSettingValueFindManySelectSchema.optional(), include: z.lazy(() => AppSettingValueIncludeObjectSchema.optional()), orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppSettingValueScalarFieldEnumSchema, AppSettingValueScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingValueFindManyArgs>;

export const AppSettingValueFindManyZodSchema = z.object({ select: AppSettingValueFindManySelectSchema.optional(), include: z.lazy(() => AppSettingValueIncludeObjectSchema.optional()), orderBy: z.union([AppSettingValueOrderByWithRelationInputObjectSchema, AppSettingValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingValueWhereInputObjectSchema.optional(), cursor: AppSettingValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppSettingValueScalarFieldEnumSchema, AppSettingValueScalarFieldEnumSchema.array()]).optional() }).strict();