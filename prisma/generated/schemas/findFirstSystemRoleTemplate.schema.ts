import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SystemRoleTemplateIncludeObjectSchema } from './objects/SystemRoleTemplateInclude.schema';
import { SystemRoleTemplateOrderByWithRelationInputObjectSchema } from './objects/SystemRoleTemplateOrderByWithRelationInput.schema';
import { SystemRoleTemplateWhereInputObjectSchema } from './objects/SystemRoleTemplateWhereInput.schema';
import { SystemRoleTemplateWhereUniqueInputObjectSchema } from './objects/SystemRoleTemplateWhereUniqueInput.schema';
import { SystemRoleTemplateScalarFieldEnumSchema } from './enums/SystemRoleTemplateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SystemRoleTemplateFindFirstSelectSchema: z.ZodType<Prisma.SystemRoleTemplateSelect> = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    tenantRoles: z.boolean().optional(),
    permissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateSelect>;

export const SystemRoleTemplateFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    tenantRoles: z.boolean().optional(),
    permissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SystemRoleTemplateFindFirstSchema: z.ZodType<Prisma.SystemRoleTemplateFindFirstArgs> = z.object({ select: SystemRoleTemplateFindFirstSelectSchema.optional(), include: z.lazy(() => SystemRoleTemplateIncludeObjectSchema.optional()), orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SystemRoleTemplateScalarFieldEnumSchema, SystemRoleTemplateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SystemRoleTemplateFindFirstArgs>;

export const SystemRoleTemplateFindFirstZodSchema = z.object({ select: SystemRoleTemplateFindFirstSelectSchema.optional(), include: z.lazy(() => SystemRoleTemplateIncludeObjectSchema.optional()), orderBy: z.union([SystemRoleTemplateOrderByWithRelationInputObjectSchema, SystemRoleTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: SystemRoleTemplateWhereInputObjectSchema.optional(), cursor: SystemRoleTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SystemRoleTemplateScalarFieldEnumSchema, SystemRoleTemplateScalarFieldEnumSchema.array()]).optional() }).strict();