import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutCommissionInput.schema';
import { DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyCommissionInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutCommissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyCommissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInput>;
export const DoctorCommissionLogUncheckedCreateNestedManyWithoutCommissionInputObjectZodSchema = makeSchema();
