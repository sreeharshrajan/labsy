import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailOrderByWithRelationInputObjectSchema } from './objects/ReportDetailOrderByWithRelationInput.schema';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';
import { ReportDetailScalarFieldEnumSchema } from './enums/ReportDetailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportDetailFindFirstSelectSchema: z.ZodType<Prisma.ReportDetailSelect> = z.object({
    id: z.boolean().optional(),
    parameterName: z.boolean().optional(),
    parameterUnit: z.boolean().optional(),
    parameterReferenceMin: z.boolean().optional(),
    parameterReferenceMax: z.boolean().optional(),
    resultText: z.boolean().optional(),
    resultValue: z.boolean().optional(),
    remarks: z.boolean().optional(),
    amount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    lastEditedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    reportId: z.boolean().optional(),
    parameterId: z.boolean().optional(),
    report: z.boolean().optional(),
    parameter: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    Service: z.boolean().optional(),
    reportTemplateId: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportDetailSelect>;

export const ReportDetailFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    parameterName: z.boolean().optional(),
    parameterUnit: z.boolean().optional(),
    parameterReferenceMin: z.boolean().optional(),
    parameterReferenceMax: z.boolean().optional(),
    resultText: z.boolean().optional(),
    resultValue: z.boolean().optional(),
    remarks: z.boolean().optional(),
    amount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    lastEditedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    reportId: z.boolean().optional(),
    parameterId: z.boolean().optional(),
    report: z.boolean().optional(),
    parameter: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    Service: z.boolean().optional(),
    reportTemplateId: z.boolean().optional(),
    ReportTemplate: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportDetailFindFirstSchema: z.ZodType<Prisma.ReportDetailFindFirstArgs> = z.object({ select: ReportDetailFindFirstSelectSchema.optional(), include: z.lazy(() => ReportDetailIncludeObjectSchema.optional()), orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportDetailScalarFieldEnumSchema, ReportDetailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportDetailFindFirstArgs>;

export const ReportDetailFindFirstZodSchema = z.object({ select: ReportDetailFindFirstSelectSchema.optional(), include: z.lazy(() => ReportDetailIncludeObjectSchema.optional()), orderBy: z.union([ReportDetailOrderByWithRelationInputObjectSchema, ReportDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportDetailWhereInputObjectSchema.optional(), cursor: ReportDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportDetailScalarFieldEnumSchema, ReportDetailScalarFieldEnumSchema.array()]).optional() }).strict();