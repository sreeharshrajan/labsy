import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUpdateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionPaymentUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
