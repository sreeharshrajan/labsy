import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutDoctorInputObjectSchema } from './ReportUpdateWithoutDoctorInput.schema';
import { ReportUncheckedUpdateWithoutDoctorInputObjectSchema } from './ReportUncheckedUpdateWithoutDoctorInput.schema';
import { ReportCreateWithoutDoctorInputObjectSchema } from './ReportCreateWithoutDoctorInput.schema';
import { ReportUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutDoctorInput>;
export const ReportUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
