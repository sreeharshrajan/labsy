import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutTenantInputObjectSchema } from './ServiceCreateWithoutTenantInput.schema';
import { ServiceUncheckedCreateWithoutTenantInputObjectSchema } from './ServiceUncheckedCreateWithoutTenantInput.schema';
import { ServiceCreateOrConnectWithoutTenantInputObjectSchema } from './ServiceCreateOrConnectWithoutTenantInput.schema';
import { ServiceCreateManyTenantInputEnvelopeObjectSchema } from './ServiceCreateManyTenantInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServiceCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ServiceCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServiceCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ServiceWhereUniqueInputObjectSchema), z.lazy(() => ServiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ServiceCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedManyWithoutTenantInput>;
export const ServiceCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
