import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema';
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorScalarFieldEnumSchema } from './enums/DoctorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DoctorSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    specialization: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    registrationNo: z.boolean().optional(),
    clinicName: z.boolean().optional(),
    department: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    doctorAddresses: z.boolean().optional(),
    doctorCommissions: z.boolean().optional(),
    doctorPayments: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorSelect>;

export const DoctorFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    specialization: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    registrationNo: z.boolean().optional(),
    clinicName: z.boolean().optional(),
    department: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    tenant: z.boolean().optional(),
    ReportInvoice: z.boolean().optional(),
    Report: z.boolean().optional(),
    doctorAddresses: z.boolean().optional(),
    doctorCommissions: z.boolean().optional(),
    doctorPayments: z.boolean().optional(),
    DoctorCommissionLog: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DoctorFindFirstOrThrowSchema: z.ZodType<Prisma.DoctorFindFirstOrThrowArgs> = z.object({ select: DoctorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorIncludeObjectSchema.optional()), orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorFindFirstOrThrowArgs>;

export const DoctorFindFirstOrThrowZodSchema = z.object({ select: DoctorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DoctorIncludeObjectSchema.optional()), orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()]).optional() }).strict();