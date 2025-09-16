import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutDoctorInputObjectSchema } from './ReportCreateWithoutDoctorInput.schema';
import { ReportUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportUncheckedCreateWithoutDoctorInput.schema';
import { ReportCreateOrConnectWithoutDoctorInputObjectSchema } from './ReportCreateOrConnectWithoutDoctorInput.schema';
import { ReportUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { ReportCreateManyDoctorInputEnvelopeObjectSchema } from './ReportCreateManyDoctorInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { ReportUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './ReportUpdateManyWithWhereWithoutDoctorInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutDoctorNestedInput>;
export const ReportUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
