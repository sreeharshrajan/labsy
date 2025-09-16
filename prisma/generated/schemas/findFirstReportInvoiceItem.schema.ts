import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportInvoiceItemIncludeObjectSchema } from './objects/ReportInvoiceItemInclude.schema';
import { ReportInvoiceItemOrderByWithRelationInputObjectSchema } from './objects/ReportInvoiceItemOrderByWithRelationInput.schema';
import { ReportInvoiceItemWhereInputObjectSchema } from './objects/ReportInvoiceItemWhereInput.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './objects/ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemScalarFieldEnumSchema } from './enums/ReportInvoiceItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportInvoiceItemFindFirstSelectSchema: z.ZodType<Prisma.ReportInvoiceItemSelect> = z.object({
    id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    price: z.boolean().optional(),
    discount: z.boolean().optional(),
    total: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    invoice: z.boolean().optional(),
    service: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceItemSelect>;

export const ReportInvoiceItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    price: z.boolean().optional(),
    discount: z.boolean().optional(),
    total: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    invoice: z.boolean().optional(),
    service: z.boolean().optional()
  }).strict();

export const ReportInvoiceItemFindFirstSchema: z.ZodType<Prisma.ReportInvoiceItemFindFirstArgs> = z.object({ select: ReportInvoiceItemFindFirstSelectSchema.optional(), include: z.lazy(() => ReportInvoiceItemIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoiceItemOrderByWithRelationInputObjectSchema, ReportInvoiceItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceItemWhereInputObjectSchema.optional(), cursor: ReportInvoiceItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoiceItemScalarFieldEnumSchema, ReportInvoiceItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportInvoiceItemFindFirstArgs>;

export const ReportInvoiceItemFindFirstZodSchema = z.object({ select: ReportInvoiceItemFindFirstSelectSchema.optional(), include: z.lazy(() => ReportInvoiceItemIncludeObjectSchema.optional()), orderBy: z.union([ReportInvoiceItemOrderByWithRelationInputObjectSchema, ReportInvoiceItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportInvoiceItemWhereInputObjectSchema.optional(), cursor: ReportInvoiceItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportInvoiceItemScalarFieldEnumSchema, ReportInvoiceItemScalarFieldEnumSchema.array()]).optional() }).strict();