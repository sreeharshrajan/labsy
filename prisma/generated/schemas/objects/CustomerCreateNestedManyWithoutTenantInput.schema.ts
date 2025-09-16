import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutTenantInputObjectSchema } from './CustomerCreateWithoutTenantInput.schema';
import { CustomerUncheckedCreateWithoutTenantInputObjectSchema } from './CustomerUncheckedCreateWithoutTenantInput.schema';
import { CustomerCreateOrConnectWithoutTenantInputObjectSchema } from './CustomerCreateOrConnectWithoutTenantInput.schema';
import { CustomerCreateManyTenantInputEnvelopeObjectSchema } from './CustomerCreateManyTenantInputEnvelope.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => CustomerCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomerWhereUniqueInputObjectSchema), z.lazy(() => CustomerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedManyWithoutTenantInput>;
export const CustomerCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
