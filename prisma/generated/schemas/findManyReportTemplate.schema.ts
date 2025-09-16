import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateOrderByWithRelationInputObjectSchema } from './objects/ReportTemplateOrderByWithRelationInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateScalarFieldEnumSchema } from './enums/ReportTemplateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportTemplateFindManySelectSchema: z.ZodType<Prisma.ReportTemplateSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    unit: z.boolean().optional(),
    reference: z.boolean().optional(),
    notes: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    service: z.boolean().optional(),
    ReportDetails: z.boolean().optional(),
    ReportParameter: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportTemplateSelect>;

export const ReportTemplateFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    unit: z.boolean().optional(),
    reference: z.boolean().optional(),
    notes: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    service: z.boolean().optional(),
    ReportDetails: z.boolean().optional(),
    ReportParameter: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportTemplateFindManySchema: z.ZodType<Prisma.ReportTemplateFindManyArgs> = z.object({ select: ReportTemplateFindManySelectSchema.optional(), include: z.lazy(() => ReportTemplateIncludeObjectSchema.optional()), orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportTemplateScalarFieldEnumSchema, ReportTemplateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportTemplateFindManyArgs>;

export const ReportTemplateFindManyZodSchema = z.object({ select: ReportTemplateFindManySelectSchema.optional(), include: z.lazy(() => ReportTemplateIncludeObjectSchema.optional()), orderBy: z.union([ReportTemplateOrderByWithRelationInputObjectSchema, ReportTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportTemplateWhereInputObjectSchema.optional(), cursor: ReportTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportTemplateScalarFieldEnumSchema, ReportTemplateScalarFieldEnumSchema.array()]).optional() }).strict();