import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateWithoutDoctorInput.schema';
import { ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutDoctorInput.schema';
import { ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutDoctorInput.schema';
import { ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { ReportInvoiceCreateManyDoctorInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyDoctorInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { ReportInvoiceUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './ReportInvoiceUpdateManyWithWhereWithoutDoctorInput.schema';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInput>;
export const ReportInvoiceUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
