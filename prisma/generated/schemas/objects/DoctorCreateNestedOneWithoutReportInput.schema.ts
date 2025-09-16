import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutReportInputObjectSchema } from './DoctorCreateWithoutReportInput.schema';
import { DoctorUncheckedCreateWithoutReportInputObjectSchema } from './DoctorUncheckedCreateWithoutReportInput.schema';
import { DoctorCreateOrConnectWithoutReportInputObjectSchema } from './DoctorCreateOrConnectWithoutReportInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutReportInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutReportInput>;
export const DoctorCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
