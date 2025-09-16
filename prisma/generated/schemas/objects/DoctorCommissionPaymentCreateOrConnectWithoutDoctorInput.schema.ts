import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentCreateOrConnectWithoutDoctorInput>;
export const DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
