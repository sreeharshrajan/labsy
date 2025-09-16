import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionUpdateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedUpdateWithoutDoctorInput.schema';
import { DoctorCommissionCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionCreateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
