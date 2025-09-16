import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuditLogIncludeObjectSchema } from './objects/AuditLogInclude.schema';
import { AuditLogOrderByWithRelationInputObjectSchema } from './objects/AuditLogOrderByWithRelationInput.schema';
import { AuditLogWhereInputObjectSchema } from './objects/AuditLogWhereInput.schema';
import { AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema';
import { AuditLogScalarFieldEnumSchema } from './enums/AuditLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditLogFindFirstSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    metadata: z.boolean().optional(),
    entity: z.boolean().optional(),
    entityId: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    userId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuditLogSelect>;

export const AuditLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    action: z.boolean().optional(),
    metadata: z.boolean().optional(),
    entity: z.boolean().optional(),
    entityId: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    userId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const AuditLogFindFirstSchema: z.ZodType<Prisma.AuditLogFindFirstArgs> = z.object({ select: AuditLogFindFirstSelectSchema.optional(), include: z.lazy(() => AuditLogIncludeObjectSchema.optional()), orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuditLogFindFirstArgs>;

export const AuditLogFindFirstZodSchema = z.object({ select: AuditLogFindFirstSelectSchema.optional(), include: z.lazy(() => AuditLogIncludeObjectSchema.optional()), orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict();