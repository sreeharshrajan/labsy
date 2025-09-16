import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUpdateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionPaymentUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
