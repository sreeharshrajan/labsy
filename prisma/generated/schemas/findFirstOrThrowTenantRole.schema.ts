import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantRoleIncludeObjectSchema } from './objects/TenantRoleInclude.schema';
import { TenantRoleOrderByWithRelationInputObjectSchema } from './objects/TenantRoleOrderByWithRelationInput.schema';
import { TenantRoleWhereInputObjectSchema } from './objects/TenantRoleWhereInput.schema';
import { TenantRoleWhereUniqueInputObjectSchema } from './objects/TenantRoleWhereUniqueInput.schema';
import { TenantRoleScalarFieldEnumSchema } from './enums/TenantRoleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantRoleFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TenantRoleSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    permissions: z.boolean().optional(),
    systemRoleTemplateId: z.boolean().optional(),
    systemRoleTemplate: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    TenantUserRole: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantRoleSelect>;

export const TenantRoleFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    permissions: z.boolean().optional(),
    systemRoleTemplateId: z.boolean().optional(),
    systemRoleTemplate: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    TenantUserRole: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantRoleFindFirstOrThrowSchema: z.ZodType<Prisma.TenantRoleFindFirstOrThrowArgs> = z.object({ select: TenantRoleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TenantRoleIncludeObjectSchema.optional()), orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantRoleScalarFieldEnumSchema, TenantRoleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantRoleFindFirstOrThrowArgs>;

export const TenantRoleFindFirstOrThrowZodSchema = z.object({ select: TenantRoleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TenantRoleIncludeObjectSchema.optional()), orderBy: z.union([TenantRoleOrderByWithRelationInputObjectSchema, TenantRoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantRoleWhereInputObjectSchema.optional(), cursor: TenantRoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantRoleScalarFieldEnumSchema, TenantRoleScalarFieldEnumSchema.array()]).optional() }).strict();