import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorCommissionPaymentSelectObjectSchema } from './objects/DoctorCommissionPaymentSelect.schema';
import { DoctorCommissionPaymentIncludeObjectSchema } from './objects/DoctorCommissionPaymentInclude.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './objects/DoctorCommissionPaymentWhereUniqueInput.schema';

export const DoctorCommissionPaymentFindUniqueSchema: z.ZodType<Prisma.DoctorCommissionPaymentFindUniqueArgs> = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), where: DoctorCommissionPaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentFindUniqueArgs>;

export const DoctorCommissionPaymentFindUniqueZodSchema = z.object({ select: DoctorCommissionPaymentSelectObjectSchema.optional(), include: DoctorCommissionPaymentIncludeObjectSchema.optional(), where: DoctorCommissionPaymentWhereUniqueInputObjectSchema }).strict();