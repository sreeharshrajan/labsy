import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryScalarWhereInputObjectSchema } from './ServiceCategoryScalarWhereInput.schema';
import { ServiceCategoryUpdateManyMutationInputObjectSchema } from './ServiceCategoryUpdateManyMutationInput.schema';
import { ServiceCategoryUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ServiceCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ServiceCategoryUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceCategoryUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateManyWithWhereWithoutTenantInput>;
export const ServiceCategoryUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
