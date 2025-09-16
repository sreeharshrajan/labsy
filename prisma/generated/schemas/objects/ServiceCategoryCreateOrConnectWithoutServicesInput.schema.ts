import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCreateWithoutServicesInputObjectSchema } from './ServiceCategoryCreateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutServicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema)])
}).strict();
export const ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutServicesInput>;
export const ServiceCategoryCreateOrConnectWithoutServicesInputObjectZodSchema = makeSchema();
