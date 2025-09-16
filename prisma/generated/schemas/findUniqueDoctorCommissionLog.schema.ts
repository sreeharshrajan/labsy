import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionLogSelectObjectSchema } from './objects/DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './objects/DoctorCommissionLogInclude.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './objects/DoctorCommissionLogWhereUniqueInput.schema';

export const DoctorCommissionLogFindUniqueSchema: z.ZodType<Prisma.DoctorCommissionLogFindUniqueArgs> = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), where: DoctorCommissionLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionLogFindUniqueArgs>;

export const DoctorCommissionLogFindUniqueZodSchema = z.object({ select: DoctorCommissionLogSelectObjectSchema.optional(), include: DoctorCommissionLogIncludeObjectSchema.optional(), where: DoctorCommissionLogWhereUniqueInputObjectSchema }).strict();