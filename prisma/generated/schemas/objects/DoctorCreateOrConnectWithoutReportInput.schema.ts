import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutReportInputObjectSchema } from './DoctorCreateWithoutReportInput.schema';
import { DoctorUncheckedCreateWithoutReportInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutReportInput>;
export const DoctorCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
