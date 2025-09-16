import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInput>;
export const DoctorCommissionLogUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
