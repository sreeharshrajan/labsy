import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionPaymentCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './DoctorCommissionPaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInput>;
export const DoctorCommissionPaymentUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
