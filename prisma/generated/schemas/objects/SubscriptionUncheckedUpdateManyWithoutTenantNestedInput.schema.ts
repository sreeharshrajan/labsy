import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionCreateWithoutTenantInputObjectSchema } from './SubscriptionCreateWithoutTenantInput.schema';
import { SubscriptionUncheckedCreateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedCreateWithoutTenantInput.schema';
import { SubscriptionCreateOrConnectWithoutTenantInputObjectSchema } from './SubscriptionCreateOrConnectWithoutTenantInput.schema';
import { SubscriptionUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './SubscriptionUpsertWithWhereUniqueWithoutTenantInput.schema';
import { SubscriptionCreateManyTenantInputEnvelopeObjectSchema } from './SubscriptionCreateManyTenantInputEnvelope.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './SubscriptionWhereUniqueInput.schema';
import { SubscriptionUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './SubscriptionUpdateWithWhereUniqueWithoutTenantInput.schema';
import { SubscriptionUpdateManyWithWhereWithoutTenantInputObjectSchema } from './SubscriptionUpdateManyWithWhereWithoutTenantInput.schema';
import { SubscriptionScalarWhereInputObjectSchema } from './SubscriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscriptionCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubscriptionWhereUniqueInputObjectSchema), z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubscriptionWhereUniqueInputObjectSchema), z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubscriptionWhereUniqueInputObjectSchema), z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubscriptionWhereUniqueInputObjectSchema), z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubscriptionUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubscriptionScalarWhereInputObjectSchema), z.lazy(() => SubscriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubscriptionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutTenantNestedInput>;
export const SubscriptionUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
