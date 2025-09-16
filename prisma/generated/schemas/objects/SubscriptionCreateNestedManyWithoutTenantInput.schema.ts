import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionCreateWithoutTenantInputObjectSchema } from './SubscriptionCreateWithoutTenantInput.schema';
import { SubscriptionUncheckedCreateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedCreateWithoutTenantInput.schema';
import { SubscriptionCreateOrConnectWithoutTenantInputObjectSchema } from './SubscriptionCreateOrConnectWithoutTenantInput.schema';
import { SubscriptionCreateManyTenantInputEnvelopeObjectSchema } from './SubscriptionCreateManyTenantInputEnvelope.schema';
import { SubscriptionWhereUniqueInputObjectSchema } from './SubscriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscriptionCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubscriptionWhereUniqueInputObjectSchema), z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubscriptionCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutTenantInput>;
export const SubscriptionCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
