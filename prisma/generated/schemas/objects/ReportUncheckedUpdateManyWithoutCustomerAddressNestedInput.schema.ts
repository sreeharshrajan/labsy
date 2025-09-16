import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCustomerAddressInputObjectSchema } from './ReportCreateWithoutCustomerAddressInput.schema';
import { ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema } from './ReportUncheckedCreateWithoutCustomerAddressInput.schema';
import { ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema } from './ReportCreateOrConnectWithoutCustomerAddressInput.schema';
import { ReportUpsertWithWhereUniqueWithoutCustomerAddressInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutCustomerAddressInput.schema';
import { ReportCreateManyCustomerAddressInputEnvelopeObjectSchema } from './ReportCreateManyCustomerAddressInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutCustomerAddressInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutCustomerAddressInput.schema';
import { ReportUpdateManyWithWhereWithoutCustomerAddressInputObjectSchema } from './ReportUpdateManyWithWhereWithoutCustomerAddressInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportCreateWithoutCustomerAddressInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCustomerAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutCustomerAddressInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutCustomerAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutCustomerAddressNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCustomerAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutCustomerAddressNestedInput>;
export const ReportUncheckedUpdateManyWithoutCustomerAddressNestedInputObjectZodSchema = makeSchema();
