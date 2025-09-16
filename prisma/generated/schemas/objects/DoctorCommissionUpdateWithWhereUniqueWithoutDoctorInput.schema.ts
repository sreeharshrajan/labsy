import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereUniqueInputObjectSchema } from './DoctorCommissionWhereUniqueInput.schema';
import { DoctorCommissionUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionUpdateWithoutDoctorInput.schema';
import { DoctorCommissionUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInput>;
export const DoctorCommissionUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
