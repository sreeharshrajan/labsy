import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterOrderByWithRelationInputObjectSchema } from './objects/ReportParameterOrderByWithRelationInput.schema';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';
import { ReportParameterScalarFieldEnumSchema } from './enums/ReportParameterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportParameterFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportParameterSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    unit: z.boolean().optional(),
    method: z.boolean().optional(),
    turnaroundTime: z.boolean().optional(),
    isCritical: z.boolean().optional(),
    criticalLow: z.boolean().optional(),
    criticalHigh: z.boolean().optional(),
    genderSpecific: z.boolean().optional(),
    ageSpecific: z.boolean().optional(),
    notes: z.boolean().optional(),
    referenceMin: z.boolean().optional(),
    referenceMax: z.boolean().optional(),
    gender: z.boolean().optional(),
    ageMin: z.boolean().optional(),
    ageMax: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    templateId: z.boolean().optional(),
    template: z.boolean().optional(),
    details: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportParameterSelect>;

export const ReportParameterFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    unit: z.boolean().optional(),
    method: z.boolean().optional(),
    turnaroundTime: z.boolean().optional(),
    isCritical: z.boolean().optional(),
    criticalLow: z.boolean().optional(),
    criticalHigh: z.boolean().optional(),
    genderSpecific: z.boolean().optional(),
    ageSpecific: z.boolean().optional(),
    notes: z.boolean().optional(),
    referenceMin: z.boolean().optional(),
    referenceMax: z.boolean().optional(),
    gender: z.boolean().optional(),
    ageMin: z.boolean().optional(),
    ageMax: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    templateId: z.boolean().optional(),
    template: z.boolean().optional(),
    details: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportParameterFindFirstOrThrowSchema: z.ZodType<Prisma.ReportParameterFindFirstOrThrowArgs> = z.object({ select: ReportParameterFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportParameterIncludeObjectSchema.optional()), orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportParameterScalarFieldEnumSchema, ReportParameterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportParameterFindFirstOrThrowArgs>;

export const ReportParameterFindFirstOrThrowZodSchema = z.object({ select: ReportParameterFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportParameterIncludeObjectSchema.optional()), orderBy: z.union([ReportParameterOrderByWithRelationInputObjectSchema, ReportParameterOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportParameterWhereInputObjectSchema.optional(), cursor: ReportParameterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportParameterScalarFieldEnumSchema, ReportParameterScalarFieldEnumSchema.array()]).optional() }).strict();