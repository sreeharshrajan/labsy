import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutServicesInputObjectSchema } from './ServiceCategoryCreateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { ServiceCategoryUpsertWithoutServicesInputObjectSchema } from './ServiceCategoryUpsertWithoutServicesInput.schema';
import { ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateToOneWithWhereWithoutServicesInput.schema';
import { ServiceCategoryUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutServicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema).optional(),
  upsert: z.lazy(() => ServiceCategoryUpsertWithoutServicesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServiceCategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServiceCategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUpdateWithoutServicesInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema)]).optional()
}).strict();
export const ServiceCategoryUpdateOneWithoutServicesNestedInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateOneWithoutServicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateOneWithoutServicesNestedInput>;
export const ServiceCategoryUpdateOneWithoutServicesNestedInputObjectZodSchema = makeSchema();
