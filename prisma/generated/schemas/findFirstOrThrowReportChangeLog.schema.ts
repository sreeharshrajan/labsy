import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogOrderByWithRelationInputObjectSchema } from './objects/ReportChangeLogOrderByWithRelationInput.schema';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogScalarFieldEnumSchema } from './enums/ReportChangeLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportChangeLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportChangeLogSelect> = z.object({
    id: z.boolean().optional(),
    reportId: z.boolean().optional(),
    userId: z.boolean().optional(),
    changedById: z.boolean().optional(),
    editVersion: z.boolean().optional(),
    changes: z.boolean().optional(),
    timestamp: z.boolean().optional(),
    conflictResolved: z.boolean().optional(),
    action: z.boolean().optional(),
    User: z.boolean().optional(),
    changedBy: z.boolean().optional(),
    report: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogSelect>;

export const ReportChangeLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    reportId: z.boolean().optional(),
    userId: z.boolean().optional(),
    changedById: z.boolean().optional(),
    editVersion: z.boolean().optional(),
    changes: z.boolean().optional(),
    timestamp: z.boolean().optional(),
    conflictResolved: z.boolean().optional(),
    action: z.boolean().optional(),
    User: z.boolean().optional(),
    changedBy: z.boolean().optional(),
    report: z.boolean().optional()
  }).strict();

export const ReportChangeLogFindFirstOrThrowSchema: z.ZodType<Prisma.ReportChangeLogFindFirstOrThrowArgs> = z.object({ select: ReportChangeLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportChangeLogIncludeObjectSchema.optional()), orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportChangeLogScalarFieldEnumSchema, ReportChangeLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogFindFirstOrThrowArgs>;

export const ReportChangeLogFindFirstOrThrowZodSchema = z.object({ select: ReportChangeLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportChangeLogIncludeObjectSchema.optional()), orderBy: z.union([ReportChangeLogOrderByWithRelationInputObjectSchema, ReportChangeLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportChangeLogWhereInputObjectSchema.optional(), cursor: ReportChangeLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportChangeLogScalarFieldEnumSchema, ReportChangeLogScalarFieldEnumSchema.array()]).optional() }).strict();