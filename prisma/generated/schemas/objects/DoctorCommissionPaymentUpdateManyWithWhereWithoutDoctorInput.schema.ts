import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentScalarWhereInputObjectSchema } from './DoctorCommissionPaymentScalarWhereInput.schema';
import { DoctorCommissionPaymentUpdateManyMutationInputObjectSchema } from './DoctorCommissionPaymentUpdateManyMutationInput.schema';
import { DoctorCommissionPaymentUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionPaymentUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInput>;
export const DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
