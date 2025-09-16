import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutTenantInputObjectSchema } from './DoctorCreateWithoutTenantInput.schema';
import { DoctorUncheckedCreateWithoutTenantInputObjectSchema } from './DoctorUncheckedCreateWithoutTenantInput.schema';
import { DoctorCreateOrConnectWithoutTenantInputObjectSchema } from './DoctorCreateOrConnectWithoutTenantInput.schema';
import { DoctorUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './DoctorUpsertWithWhereUniqueWithoutTenantInput.schema';
import { DoctorCreateManyTenantInputEnvelopeObjectSchema } from './DoctorCreateManyTenantInputEnvelope.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './DoctorUpdateWithWhereUniqueWithoutTenantInput.schema';
import { DoctorUpdateManyWithWhereWithoutTenantInputObjectSchema } from './DoctorUpdateManyWithWhereWithoutTenantInput.schema';
import { DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => DoctorCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => DoctorUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => DoctorUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => DoctorUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateManyWithoutTenantNestedInput>;
export const DoctorUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
