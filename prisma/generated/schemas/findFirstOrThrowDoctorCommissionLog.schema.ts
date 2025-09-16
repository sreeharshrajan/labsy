import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionLogOrderByWithRelationInput.schema';
import { DoctorCommissionLogWhereInputObjectSchema } from './objects/DoctorCommissionLogWhereInput.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogScalarFieldEnumSchema } from './enums/DoctorCommissionLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorCommissionLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DoctorCommissionLogSelect> = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    commissionId: z.boolean().optional(),
    reportDetailId: z.boolean().optional(),
    commissionAmt: z.boolean().optional(),
    commissionStatus: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    commission: z.boolean().optional(),
    doctor: z.boolean().optional(),
    invoice: z.boolean().optional(),
    reportDetail: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionLogSelect>;

export const DoctorCommissionLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    invoiceId: z.boolean().optional(),
    commissionId: z.boolean().optional(),
    reportDetailId: z.boolean().optional(),
    commissionAmt: z.boolean().optional(),
    commissionStatus: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    commission: z.boolean().optional(),
    doctor: z.boolean().optional(),
    invoice: z.boolean().optional(),
    reportDetail: z.boolean().optional()
  }).strict();

export const DoctorCommissionLogFindFirstOrThrowSchema: z.ZodType<Prisma.DoctorCommissionLogFindFirstOrThrowArgs> = z.object({ select: DoctorCommissionLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorCommissionLogIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionLogOrderByWithRelationInputObjectSchema, DoctorCommissionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionLogWhereInputObjectSchema.optional(), cursor: DoctorCommissionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionLogScalarFieldEnumSchema, DoctorCommissionLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionLogFindFirstOrThrowArgs>;

export const DoctorCommissionLogFindFirstOrThrowZodSchema = z.object({ select: DoctorCommissionLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorCommissionLogIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionLogOrderByWithRelationInputObjectSchema, DoctorCommissionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionLogWhereInputObjectSchema.optional(), cursor: DoctorCommissionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionLogScalarFieldEnumSchema, DoctorCommissionLogScalarFieldEnumSchema.array()]).optional() }).strict();