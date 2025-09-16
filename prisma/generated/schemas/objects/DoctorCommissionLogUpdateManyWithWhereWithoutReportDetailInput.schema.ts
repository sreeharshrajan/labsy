import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogUncheckedUpdateManyWithoutReportDetailInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateManyWithoutReportDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateManyWithoutReportDetailInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInput>;
export const DoctorCommissionLogUpdateManyWithWhereWithoutReportDetailInputObjectZodSchema = makeSchema();
