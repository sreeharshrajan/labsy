import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutServicesInputObjectSchema } from './ServiceCategoryCreateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateNestedOneWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateNestedOneWithoutServicesInput>;
export const ServiceCategoryCreateNestedOneWithoutServicesInputObjectZodSchema = makeSchema();
