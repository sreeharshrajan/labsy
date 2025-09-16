import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceScalarWhereInputObjectSchema } from './ServiceScalarWhereInput.schema';
import { ServiceUpdateManyMutationInputObjectSchema } from './ServiceUpdateManyMutationInput.schema';
import { ServiceUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ServiceUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ServiceUpdateManyMutationInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutTenantInput>;
export const ServiceUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
