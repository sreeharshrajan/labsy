import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUpdateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutDoctorInput.schema';
import { DoctorCommissionLogCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogCreateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
