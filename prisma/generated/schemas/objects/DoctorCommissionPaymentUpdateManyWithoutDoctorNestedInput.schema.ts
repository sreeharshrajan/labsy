import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUncheckedCreateWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentCreateOrConnectWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorCommissionPaymentCreateManyDoctorInputEnvelope.schema';
import { DoctorCommissionPaymentWhereUniqueInputObjectSchema } from './DoctorCommissionPaymentWhereUniqueInput.schema';
import { DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInput.schema';
import { DoctorCommissionPaymentScalarWhereInputObjectSchema } from './DoctorCommissionPaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionPaymentCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionPaymentUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionPaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInput>;
export const DoctorCommissionPaymentUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
