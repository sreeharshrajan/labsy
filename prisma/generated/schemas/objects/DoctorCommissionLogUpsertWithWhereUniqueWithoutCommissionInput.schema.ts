import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUpdateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedUpdateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateWithoutCommissionInput.schema';
import { DoctorCommissionLogCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogCreateWithoutCommissionInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutCommissionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateWithoutCommissionInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutCommissionInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutCommissionInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInput>;
export const DoctorCommissionLogUpsertWithWhereUniqueWithoutCommissionInputObjectZodSchema = makeSchema();
