import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithoutTenantInputObjectSchema } from './ServiceUpdateWithoutTenantInput.schema';
import { ServiceUncheckedUpdateWithoutTenantInputObjectSchema } from './ServiceUncheckedUpdateWithoutTenantInput.schema';
import { ServiceCreateWithoutTenantInputObjectSchema } from './ServiceCreateWithoutTenantInput.schema';
import { ServiceUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ServiceUpdateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutTenantInput>;
export const ServiceUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
