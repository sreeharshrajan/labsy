import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';

export const DoctorCommissionFindUniqueSchema: z.ZodType<Prisma.DoctorCommissionFindUniqueArgs> = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionFindUniqueArgs>;

export const DoctorCommissionFindUniqueZodSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema }).strict();