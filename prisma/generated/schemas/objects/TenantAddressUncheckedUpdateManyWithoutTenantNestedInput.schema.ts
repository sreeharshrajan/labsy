import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutTenantInputObjectSchema } from './TenantAddressCreateWithoutTenantInput.schema';
import { TenantAddressUncheckedCreateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedCreateWithoutTenantInput.schema';
import { TenantAddressCreateOrConnectWithoutTenantInputObjectSchema } from './TenantAddressCreateOrConnectWithoutTenantInput.schema';
import { TenantAddressUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantAddressUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantAddressCreateManyTenantInputEnvelopeObjectSchema } from './TenantAddressCreateManyTenantInputEnvelope.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantAddressUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantAddressUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantAddressUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantAddressScalarWhereInputObjectSchema } from './TenantAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantAddressCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantAddressUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantAddressCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantAddressUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantAddressUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantAddressScalarWhereInputObjectSchema), z.lazy(() => TenantAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantAddressUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.TenantAddressUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUncheckedUpdateManyWithoutTenantNestedInput>;
export const TenantAddressUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
