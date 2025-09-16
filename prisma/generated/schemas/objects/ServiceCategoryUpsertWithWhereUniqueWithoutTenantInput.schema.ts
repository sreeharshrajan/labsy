import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateWithoutTenantInputObjectSchema } from './ServiceCategoryUpdateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutTenantInput.schema';
import { ServiceCategoryCreateWithoutTenantInputObjectSchema } from './ServiceCategoryCreateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ServiceCategoryUpdateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceCategoryUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpsertWithWhereUniqueWithoutTenantInput>;
export const ServiceCategoryUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
