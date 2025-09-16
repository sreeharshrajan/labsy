import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedCreateWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogCreateOrConnectWithoutInvoiceInput.schema';
import { DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectSchema } from './DoctorCommissionLogCreateManyInvoiceInputEnvelope.schema';
import { DoctorCommissionLogWhereUniqueInputObjectSchema } from './DoctorCommissionLogWhereUniqueInput.schema';
import { DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInput.schema';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCommissionLogCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema), z.lazy(() => DoctorCommissionLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema), z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceNestedInput>;
export const DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
