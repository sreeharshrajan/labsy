import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutDoctorInputObjectSchema } from './ReportUpdateWithoutDoctorInput.schema';
import { ReportUncheckedUpdateWithoutDoctorInputObjectSchema } from './ReportUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutDoctorInput>;
export const ReportUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
