import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserRoleIncludeObjectSchema } from './objects/TenantUserRoleInclude.schema';
import { TenantUserRoleOrderByWithRelationInputObjectSchema } from './objects/TenantUserRoleOrderByWithRelationInput.schema';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';
import { TenantUserRoleWhereUniqueInputObjectSchema } from './objects/TenantUserRoleWhereUniqueInput.schema';
import { TenantUserRoleScalarFieldEnumSchema } from './enums/TenantUserRoleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantUserRoleFindFirstSelectSchema: z.ZodType<Prisma.TenantUserRoleSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantUserId: z.boolean().optional(),
    roleId: z.boolean().optional(),
    tenantUser: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleSelect>;

export const TenantUserRoleFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantUserId: z.boolean().optional(),
    roleId: z.boolean().optional(),
    tenantUser: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict();

export const TenantUserRoleFindFirstSchema: z.ZodType<Prisma.TenantUserRoleFindFirstArgs> = z.object({ select: TenantUserRoleFindFirstSelectSchema.optional(), include: z.lazy(() => TenantUserRoleIncludeObjectSchema.optional()), orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantUserRoleScalarFieldEnumSchema, TenantUserRoleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserRoleFindFirstArgs>;

export const TenantUserRoleFindFirstZodSchema = z.object({ select: TenantUserRoleFindFirstSelectSchema.optional(), include: z.lazy(() => TenantUserRoleIncludeObjectSchema.optional()), orderBy: z.union([TenantUserRoleOrderByWithRelationInputObjectSchema, TenantUserRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserRoleWhereInputObjectSchema.optional(), cursor: TenantUserRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantUserRoleScalarFieldEnumSchema, TenantUserRoleScalarFieldEnumSchema.array()]).optional() }).strict();