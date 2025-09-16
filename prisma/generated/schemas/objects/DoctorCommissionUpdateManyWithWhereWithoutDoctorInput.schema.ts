import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionScalarWhereInputObjectSchema } from './DoctorCommissionScalarWhereInput.schema';
import { DoctorCommissionUpdateManyMutationInputObjectSchema } from './DoctorCommissionUpdateManyMutationInput.schema';
import { DoctorCommissionUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './DoctorCommissionUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionUpdateManyWithWhereWithoutDoctorInput>;
export const DoctorCommissionUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
