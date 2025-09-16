import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUpdateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutCommissionInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInput>;
export const DoctorCommissionLogUpdateWithWhereUniqueWithoutCommissionInputObjectZodSchema = makeSchema();
