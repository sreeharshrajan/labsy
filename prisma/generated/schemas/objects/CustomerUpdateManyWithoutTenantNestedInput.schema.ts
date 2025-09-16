import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutTenantInputObjectSchema } from './CustomerCreateWithoutTenantInput.schema';
import { CustomerUncheckedCreateWithoutTenantInputObjectSchema } from './CustomerUncheckedCreateWithoutTenantInput.schema';
import { CustomerCreateOrConnectWithoutTenantInputObjectSchema } from './CustomerCreateOrConnectWithoutTenantInput.schema';
import { CustomerUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './CustomerUpsertWithWhereUniqueWithoutTenantInput.schema';
import { CustomerCreateManyTenantInputEnvelopeObjectSchema } from './CustomerCreateManyTenantInputEnvelope.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './CustomerUpdateWithWhereUniqueWithoutTenantInput.schema';
import { CustomerUpdateManyWithWhereWithoutTenantInputObjectSchema } from './CustomerUpdateManyWithWhereWithoutTenantInput.schema';
import { CustomerScalarWhereInputObjectSchema } from './CustomerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => CustomerCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomerUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => CustomerUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomerWhereUniqueInputObjectSchema), z.lazy(() => CustomerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomerWhereUniqueInputObjectSchema), z.lazy(() => CustomerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomerWhereUniqueInputObjectSchema), z.lazy(() => CustomerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomerWhereUniqueInputObjectSchema), z.lazy(() => CustomerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomerUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => CustomerUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomerUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => CustomerUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomerScalarWhereInputObjectSchema), z.lazy(() => CustomerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomerUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateManyWithoutTenantNestedInput>;
export const CustomerUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
