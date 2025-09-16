import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppSettingIncludeObjectSchema } from './objects/AppSettingInclude.schema';
import { AppSettingOrderByWithRelationInputObjectSchema } from './objects/AppSettingOrderByWithRelationInput.schema';
import { AppSettingWhereInputObjectSchema } from './objects/AppSettingWhereInput.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './objects/AppSettingWhereUniqueInput.schema';
import { AppSettingScalarFieldEnumSchema } from './enums/AppSettingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppSettingFindFirstSelectSchema: z.ZodType<Prisma.AppSettingSelect> = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    values: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AppSettingSelect>;

export const AppSettingFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    values: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AppSettingFindFirstSchema: z.ZodType<Prisma.AppSettingFindFirstArgs> = z.object({ select: AppSettingFindFirstSelectSchema.optional(), include: z.lazy(() => AppSettingIncludeObjectSchema.optional()), orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppSettingScalarFieldEnumSchema, AppSettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AppSettingFindFirstArgs>;

export const AppSettingFindFirstZodSchema = z.object({ select: AppSettingFindFirstSelectSchema.optional(), include: z.lazy(() => AppSettingIncludeObjectSchema.optional()), orderBy: z.union([AppSettingOrderByWithRelationInputObjectSchema, AppSettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppSettingWhereInputObjectSchema.optional(), cursor: AppSettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppSettingScalarFieldEnumSchema, AppSettingScalarFieldEnumSchema.array()]).optional() }).strict();