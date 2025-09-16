import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutReportInputObjectSchema } from './DoctorUpdateWithoutReportInput.schema';
import { DoctorUncheckedUpdateWithoutReportInputObjectSchema } from './DoctorUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutReportInput>;
export const DoctorUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
