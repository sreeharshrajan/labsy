import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutAddressInputObjectSchema } from './TenantAddressCreateWithoutAddressInput.schema';
import { TenantAddressUncheckedCreateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateWithoutAddressInput.schema';
import { TenantAddressCreateOrConnectWithoutAddressInputObjectSchema } from './TenantAddressCreateOrConnectWithoutAddressInput.schema';
import { TenantAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema } from './TenantAddressUpsertWithWhereUniqueWithoutAddressInput.schema';
import { TenantAddressCreateManyAddressInputEnvelopeObjectSchema } from './TenantAddressCreateManyAddressInputEnvelope.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema } from './TenantAddressUpdateWithWhereUniqueWithoutAddressInput.schema';
import { TenantAddressUpdateManyWithWhereWithoutAddressInputObjectSchema } from './TenantAddressUpdateManyWithWhereWithoutAddressInput.schema';
import { TenantAddressScalarWhereInputObjectSchema } from './TenantAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantAddressUpdateManyWithWhereWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUpdateManyWithWhereWithoutAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantAddressScalarWhereInputObjectSchema), z.lazy(() => TenantAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantAddressUpdateManyWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateManyWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateManyWithoutAddressNestedInput>;
export const TenantAddressUpdateManyWithoutAddressNestedInputObjectZodSchema = makeSchema();
