import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutDoctorInputObjectSchema } from './ReportCreateWithoutDoctorInput.schema';
import { ReportUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutDoctorInput>;
export const ReportCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
