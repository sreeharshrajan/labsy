import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressOrderByWithRelationInputObjectSchema } from './objects/DoctorAddressOrderByWithRelationInput.schema';
import { DoctorAddressWhereInputObjectSchema } from './objects/DoctorAddressWhereInput.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressScalarFieldEnumSchema } from './enums/DoctorAddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorAddressFindManySelectSchema: z.ZodType<Prisma.DoctorAddressSelect> = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctor: z.boolean().optional(),
    address: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorAddressSelect>;

export const DoctorAddressFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    addressId: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    doctor: z.boolean().optional(),
    address: z.boolean().optional()
  }).strict();

export const DoctorAddressFindManySchema: z.ZodType<Prisma.DoctorAddressFindManyArgs> = z.object({ select: DoctorAddressFindManySelectSchema.optional(), include: z.lazy(() => DoctorAddressIncludeObjectSchema.optional()), orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorAddressScalarFieldEnumSchema, DoctorAddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorAddressFindManyArgs>;

export const DoctorAddressFindManyZodSchema = z.object({ select: DoctorAddressFindManySelectSchema.optional(), include: z.lazy(() => DoctorAddressIncludeObjectSchema.optional()), orderBy: z.union([DoctorAddressOrderByWithRelationInputObjectSchema, DoctorAddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorAddressWhereInputObjectSchema.optional(), cursor: DoctorAddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorAddressScalarFieldEnumSchema, DoctorAddressScalarFieldEnumSchema.array()]).optional() }).strict();