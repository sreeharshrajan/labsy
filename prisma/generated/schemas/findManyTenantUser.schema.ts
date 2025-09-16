import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TenantUserIncludeObjectSchema } from './objects/TenantUserInclude.schema';
import { TenantUserOrderByWithRelationInputObjectSchema } from './objects/TenantUserOrderByWithRelationInput.schema';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './objects/TenantUserWhereUniqueInput.schema';
import { TenantUserScalarFieldEnumSchema } from './enums/TenantUserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantUserFindManySelectSchema: z.ZodType<Prisma.TenantUserSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantRoles: z.boolean().optional(),
    userId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    user: z.boolean().optional(),
    tenant: z.boolean().optional(),
    Report: z.boolean().optional(),
    reportUpdates: z.boolean().optional(),
    collectedBy: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantUserSelect>;

export const TenantUserFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantRoles: z.boolean().optional(),
    userId: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    user: z.boolean().optional(),
    tenant: z.boolean().optional(),
    Report: z.boolean().optional(),
    reportUpdates: z.boolean().optional(),
    collectedBy: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantUserFindManySchema: z.ZodType<Prisma.TenantUserFindManyArgs> = z.object({ select: TenantUserFindManySelectSchema.optional(), include: z.lazy(() => TenantUserIncludeObjectSchema.optional()), orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantUserScalarFieldEnumSchema, TenantUserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantUserFindManyArgs>;

export const TenantUserFindManyZodSchema = z.object({ select: TenantUserFindManySelectSchema.optional(), include: z.lazy(() => TenantUserIncludeObjectSchema.optional()), orderBy: z.union([TenantUserOrderByWithRelationInputObjectSchema, TenantUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantUserWhereInputObjectSchema.optional(), cursor: TenantUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantUserScalarFieldEnumSchema, TenantUserScalarFieldEnumSchema.array()]).optional() }).strict();