import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionOrderByWithRelationInputObjectSchema } from './objects/DoctorCommissionOrderByWithRelationInput.schema';
import { DoctorCommissionWhereInputObjectSchema } from './objects/DoctorCommissionWhereInput.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionScalarFieldEnumSchema } from './enums/DoctorCommissionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorCommissionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DoctorCommissionSelect> = z.object({
    id: z.boolean().optional(),
    commissionType: z.boolean().optional(),
    value: z.boolean().optional(),
    isActive: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionSelect>;

export const DoctorCommissionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    commissionType: z.boolean().optional(),
    value: z.boolean().optional(),
    isActive: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DoctorCommissionFindFirstOrThrowSchema: z.ZodType<Prisma.DoctorCommissionFindFirstOrThrowArgs> = z.object({ select: DoctorCommissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorCommissionIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionOrderByWithRelationInputObjectSchema, DoctorCommissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionWhereInputObjectSchema.optional(), cursor: DoctorCommissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionScalarFieldEnumSchema, DoctorCommissionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionFindFirstOrThrowArgs>;

export const DoctorCommissionFindFirstOrThrowZodSchema = z.object({ select: DoctorCommissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorCommissionIncludeObjectSchema.optional()), orderBy: z.union([DoctorCommissionOrderByWithRelationInputObjectSchema, DoctorCommissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorCommissionWhereInputObjectSchema.optional(), cursor: DoctorCommissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorCommissionScalarFieldEnumSchema, DoctorCommissionScalarFieldEnumSchema.array()]).optional() }).strict();