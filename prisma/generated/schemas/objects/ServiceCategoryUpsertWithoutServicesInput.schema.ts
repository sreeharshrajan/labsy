import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutServicesInput.schema';
import { ServiceCategoryCreateWithoutServicesInputObjectSchema } from './ServiceCategoryCreateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServiceCategoryUpdateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema)]),
  where: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional()
}).strict();
export const ServiceCategoryUpsertWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpsertWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpsertWithoutServicesInput>;
export const ServiceCategoryUpsertWithoutServicesInputObjectZodSchema = makeSchema();
