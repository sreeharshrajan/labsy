import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogOrderByWithRelationInputObjectSchema } from './objects/SyncLogOrderByWithRelationInput.schema';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';
import { SyncLogScalarFieldEnumSchema } from './enums/SyncLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SyncLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SyncLogSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    entity: z.boolean().optional(),
    entityId: z.boolean().optional(),
    details: z.boolean().optional(),
    status: z.boolean().optional(),
    operation: z.boolean().optional(),
    syncedAt: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SyncLogSelect>;

export const SyncLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    entity: z.boolean().optional(),
    entityId: z.boolean().optional(),
    details: z.boolean().optional(),
    status: z.boolean().optional(),
    operation: z.boolean().optional(),
    syncedAt: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    tenant: z.boolean().optional()
  }).strict();

export const SyncLogFindFirstOrThrowSchema: z.ZodType<Prisma.SyncLogFindFirstOrThrowArgs> = z.object({ select: SyncLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SyncLogIncludeObjectSchema.optional()), orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SyncLogScalarFieldEnumSchema, SyncLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SyncLogFindFirstOrThrowArgs>;

export const SyncLogFindFirstOrThrowZodSchema = z.object({ select: SyncLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SyncLogIncludeObjectSchema.optional()), orderBy: z.union([SyncLogOrderByWithRelationInputObjectSchema, SyncLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: SyncLogWhereInputObjectSchema.optional(), cursor: SyncLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SyncLogScalarFieldEnumSchema, SyncLogScalarFieldEnumSchema.array()]).optional() }).strict();