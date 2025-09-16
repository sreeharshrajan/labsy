import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutTenantInputObjectSchema } from './ServiceCategoryCreateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTenantInput.schema';
import { ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutTenantInput.schema';
import { ServiceCategoryUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ServiceCategoryUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ServiceCategoryCreateManyTenantInputEnvelopeObjectSchema } from './ServiceCategoryCreateManyTenantInputEnvelope.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ServiceCategoryUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ServiceCategoryUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ServiceCategoryUpdateManyWithWhereWithoutTenantInput.schema';
import { ServiceCategoryScalarWhereInputObjectSchema } from './ServiceCategoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServiceCategoryUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCategoryCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema), z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema), z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema), z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema), z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServiceCategoryUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServiceCategoryUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema), z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ServiceCategoryUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateManyWithoutTenantNestedInput>;
export const ServiceCategoryUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
