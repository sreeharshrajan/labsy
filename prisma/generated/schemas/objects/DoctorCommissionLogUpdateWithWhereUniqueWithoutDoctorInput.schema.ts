import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUpdateWithoutDoctorInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
