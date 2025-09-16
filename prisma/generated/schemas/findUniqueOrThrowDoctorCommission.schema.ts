import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionSelectObjectSchema } from './objects/DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './objects/DoctorCommissionInclude.schema';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './objects/DoctorCommissionWhereUniqueInput.schema';

export const DoctorCommissionFindUniqueOrThrowSchema: z.ZodType<Prisma.DoctorCommissionFindUniqueOrThrowArgs> = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionFindUniqueOrThrowArgs>;

export const DoctorCommissionFindUniqueOrThrowZodSchema = z.object({ select: DoctorCommissionSelectObjectSchema.optional(), include: DoctorCommissionIncludeObjectSchema.optional(), where: DoctorCommissionWhereUniqueInputObjectSchema }).strict();