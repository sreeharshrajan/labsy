import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCreateWithoutTenantInputObjectSchema } from './ServiceCategoryCreateWithoutTenantInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCategoryCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceCategoryCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutTenantInput>;
export const ServiceCategoryCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
