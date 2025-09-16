import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogUncheckedUpdateManyWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateManyWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateManyWithoutCommissionInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInput>;
export const DoctorCommissionLogUpdateManyWithWhereWithoutCommissionInputObjectZodSchema = makeSchema();
