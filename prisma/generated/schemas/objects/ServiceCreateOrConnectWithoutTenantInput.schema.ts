import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutTenantInputObjectSchema } from './ServiceCreateWithoutTenantInput.schema';
import { ServiceUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ServiceCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutTenantInput>;
export const ServiceCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
