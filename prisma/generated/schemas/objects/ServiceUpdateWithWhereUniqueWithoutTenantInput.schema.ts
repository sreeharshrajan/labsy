import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithoutTenantInputObjectSchema } from './ServiceUpdateWithoutTenantInput.schema';
import { ServiceUncheckedUpdateWithoutTenantInputObjectSchema } from './ServiceUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ServiceUpdateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutTenantInput>;
export const ServiceUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
