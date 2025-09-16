import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantPermissionIncludeObjectSchema } from './objects/TenantPermissionInclude.schema';
import { TenantPermissionOrderByWithRelationInputObjectSchema } from './objects/TenantPermissionOrderByWithRelationInput.schema';
import { TenantPermissionWhereInputObjectSchema } from './objects/TenantPermissionWhereInput.schema';
import { TenantPermissionWhereUniqueInputObjectSchema } from './objects/TenantPermissionWhereUniqueInput.schema';
import { TenantPermissionScalarFieldEnumSchema } from './enums/TenantPermissionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantPermissionFindManySelectSchema: z.ZodType<Prisma.TenantPermissionSelect> = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    roleId: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantPermissionSelect>;

export const TenantPermissionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    roleId: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict();

export const TenantPermissionFindManySchema: z.ZodType<Prisma.TenantPermissionFindManyArgs> = z.object({ select: TenantPermissionFindManySelectSchema.optional(), include: z.lazy(() => TenantPermissionIncludeObjectSchema.optional()), orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantPermissionScalarFieldEnumSchema, TenantPermissionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantPermissionFindManyArgs>;

export const TenantPermissionFindManyZodSchema = z.object({ select: TenantPermissionFindManySelectSchema.optional(), include: z.lazy(() => TenantPermissionIncludeObjectSchema.optional()), orderBy: z.union([TenantPermissionOrderByWithRelationInputObjectSchema, TenantPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantPermissionWhereInputObjectSchema.optional(), cursor: TenantPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantPermissionScalarFieldEnumSchema, TenantPermissionScalarFieldEnumSchema.array()]).optional() }).strict();