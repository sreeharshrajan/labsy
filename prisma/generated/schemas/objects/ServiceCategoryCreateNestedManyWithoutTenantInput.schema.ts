import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutTenantInputObjectSchema } from './ServiceCategoryCreateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTenantInput.schema';
import { ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutTenantInput.schema';
import { ServiceCategoryCreateManyTenantInputEnvelopeObjectSchema } from './ServiceCategoryCreateManyTenantInputEnvelope.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCategoryCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema), z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ServiceCategoryCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateNestedManyWithoutTenantInput>;
export const ServiceCategoryCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
