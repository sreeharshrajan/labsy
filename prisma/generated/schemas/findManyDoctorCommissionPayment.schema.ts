import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionPaymentOrderByWithRelationInput.schema';
import { DoctorCommissionPaymentWhereInputObjectSchema } from './objects/DoctorCommissionPaymentWhereInput.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentScalarFieldEnumSchema } from './enums/DoctorCommissionPaymentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorCommissionPaymentFindManySelectSchema: z.ZodType<Prisma.DoctorCommissionPaymentSelect> = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    referenceNo: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentSelect>;

export const DoctorCommissionPaymentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    referenceNo: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional()
  }).strict();

export const DoctorCommissionPaymentFindManySchema: z.ZodType<Prisma.DoctorCommissionPaymentFindManyArgs> = z.object({ select: DoctorCommissionPaymentFindManySelectSchema.optional(), include: z.lazy(() => DoctorCommissionPaymentIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionPaymentOrderByWithRelationInputObjectSchema, DoctorCommissionPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionPaymentWhereInputObjectSchema.optional(), cursor: DoctorCommissionPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionPaymentScalarFieldEnumSchema, DoctorCommissionPaymentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentFindManyArgs>;

export const DoctorCommissionPaymentFindManyZodSchema = z.object({ select: DoctorCommissionPaymentFindManySelectSchema.optional(), include: z.lazy(() => DoctorCommissionPaymentIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionPaymentOrderByWithRelationInputObjectSchema, DoctorCommissionPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionPaymentWhereInputObjectSchema.optional(), cursor: DoctorCommissionPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionPaymentScalarFieldEnumSchema, DoctorCommissionPaymentScalarFieldEnumSchema.array()]).optional() }).strict();