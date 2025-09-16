import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AppConfigOrderByWithRelationInputObjectSchema } from './objects/AppConfigOrderByWithRelationInput.schema';
import { AppConfigWhereInputObjectSchema } from './objects/AppConfigWhereInput.schema';
import { AppConfigWhereUniqueInputObjectSchema } from './objects/AppConfigWhereUniqueInput.schema';
import { AppConfigScalarFieldEnumSchema } from './enums/AppConfigScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppConfigFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AppConfigSelect> = z.object({
    id: z.boolean().optional(),
    appName: z.boolean().optional(),
    appVersion: z.boolean().optional(),
    appLogo: z.boolean().optional(),
    appIcon: z.boolean().optional(),
    appBanner: z.boolean().optional(),
    appDescription: z.boolean().optional(),
    appKeywords: z.boolean().optional(),
    appAuthor: z.boolean().optional(),
    appAuthorEmail: z.boolean().optional(),
    appAuthorUrl: z.boolean().optional(),
    appCopyright: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AppConfigSelect>;

export const AppConfigFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    appName: z.boolean().optional(),
    appVersion: z.boolean().optional(),
    appLogo: z.boolean().optional(),
    appIcon: z.boolean().optional(),
    appBanner: z.boolean().optional(),
    appDescription: z.boolean().optional(),
    appKeywords: z.boolean().optional(),
    appAuthor: z.boolean().optional(),
    appAuthorEmail: z.boolean().optional(),
    appAuthorUrl: z.boolean().optional(),
    appCopyright: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AppConfigFindFirstOrThrowSchema: z.ZodType<Prisma.AppConfigFindFirstOrThrowArgs> = z.object({ select: AppConfigFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppConfigScalarFieldEnumSchema, AppConfigScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AppConfigFindFirstOrThrowArgs>;

export const AppConfigFindFirstOrThrowZodSchema = z.object({ select: AppConfigFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AppConfigOrderByWithRelationInputObjectSchema, AppConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppConfigWhereInputObjectSchema.optional(), cursor: AppConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppConfigScalarFieldEnumSchema, AppConfigScalarFieldEnumSchema.array()]).optional() }).strict();