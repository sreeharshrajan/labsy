import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCustomerInputObjectSchema } from './ReportCreateWithoutCustomerInput.schema';
import { ReportUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerInput.schema';
import { ReportCreateOrConnectWithoutCustomerInputObjectSchema } from './ReportCreateOrConnectWithoutCustomerInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { ReportCreateManyCustomerInputEnvelopeObjectSchema } from './ReportCreateManyCustomerInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { ReportUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCustomerInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCustomerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCustomerNestedInput>;
export const ReportUncheckedUpdateManyWithoutCustomerNestedInputObjectZodSchema = makeSchema();
