import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutTenantInputObjectSchema } from './ServiceCreateWithoutTenantInput.schema';
import { ServiceUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceUncheckedCreateWithoutTenantInput.schema';
import { ServiceCreateOrConnectWithoutTenantInputObjectSchema } from './ServiceCreateOrConnectWithoutTenantInput.schema';
import { ServiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ServiceUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ServiceCreateManyTenantInputEnvelopeObjectSchema } from './ServiceCreateManyTenantInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ServiceUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ServiceUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ServiceUpdateManyWithWhereWithoutTenantInput.schema';
import { ServiceScalarWhereInputObjectSchema } from './ServiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ServiceCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ServiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ServiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServiceUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ServiceUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServiceScalarWhereInputObjectSchema), z.lazy(() => ServiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ServiceUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateManyWithoutTenantNestedInput>;
export const ServiceUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
