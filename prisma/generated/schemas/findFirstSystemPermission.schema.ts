import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemPermissionIncludeObjectSchema } from './objects/SystemPermissionInclude.schema';
import { SystemPermissionOrderByWithRelationInputObjectSchema } from './objects/SystemPermissionOrderByWithRelationInput.schema';
import { SystemPermissionWhereInputObjectSchema } from './objects/SystemPermissionWhereInput.schema';
import { SystemPermissionWhereUniqueInputObjectSchema } from './objects/SystemPermissionWhereUniqueInput.schema';
import { SystemPermissionScalarFieldEnumSchema } from './enums/SystemPermissionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SystemPermissionFindFirstSelectSchema: z.ZodType<Prisma.SystemPermissionSelect> = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    conditions: z.boolean().optional(),
    roleTemplateId: z.boolean().optional(),
    roleTemplate: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SystemPermissionSelect>;

export const SystemPermissionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    conditions: z.boolean().optional(),
    roleTemplateId: z.boolean().optional(),
    roleTemplate: z.boolean().optional()
  }).strict();

export const SystemPermissionFindFirstSchema: z.ZodType<Prisma.SystemPermissionFindFirstArgs> = z.object({ select: SystemPermissionFindFirstSelectSchema.optional(), include: z.lazy(() => SystemPermissionIncludeObjectSchema.optional()), orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SystemPermissionScalarFieldEnumSchema, SystemPermissionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SystemPermissionFindFirstArgs>;

export const SystemPermissionFindFirstZodSchema = z.object({ select: SystemPermissionFindFirstSelectSchema.optional(), include: z.lazy(() => SystemPermissionIncludeObjectSchema.optional()), orderBy: z.union([SystemPermissionOrderByWithRelationInputObjectSchema, SystemPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemPermissionWhereInputObjectSchema.optional(), cursor: SystemPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SystemPermissionScalarFieldEnumSchema, SystemPermissionScalarFieldEnumSchema.array()]).optional() }).strict();