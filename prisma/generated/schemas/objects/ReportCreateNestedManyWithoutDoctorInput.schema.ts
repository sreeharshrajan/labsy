import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutDoctorInputObjectSchema } from './ReportCreateWithoutDoctorInput.schema';
import { ReportUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportUncheckedCreateWithoutDoctorInput.schema';
import { ReportCreateOrConnectWithoutDoctorInputObjectSchema } from './ReportCreateOrConnectWithoutDoctorInput.schema';
import { ReportCreateManyDoctorInputEnvelopeObjectSchema } from './ReportCreateManyDoctorInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutDoctorInput>;
export const ReportCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
