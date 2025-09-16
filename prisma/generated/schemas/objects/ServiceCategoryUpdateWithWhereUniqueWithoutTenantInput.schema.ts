import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateWithoutTenantInputObjectSchema } from './ServiceCategoryUpdateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ServiceCategoryUpdateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceCategoryUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateWithWhereUniqueWithoutTenantInput>;
export const ServiceCategoryUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
