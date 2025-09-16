import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutReportInputObjectSchema } from './DoctorUpdateWithoutReportInput.schema';
import { DoctorUncheckedUpdateWithoutReportInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInput.schema';
import { DoctorCreateWithoutReportInputObjectSchema } from './DoctorCreateWithoutReportInput.schema';
import { DoctorUncheckedCreateWithoutReportInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutReportInput>;
export const DoctorUpsertWithoutReportInputObjectZodSchema = makeSchema();
