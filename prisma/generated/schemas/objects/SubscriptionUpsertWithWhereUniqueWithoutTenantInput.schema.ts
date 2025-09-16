import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInputObjectSchema } from './SubscriptionWhereUniqueInput.schema';
import { SubscriptionUpdateWithoutTenantInputObjectSchema } from './SubscriptionUpdateWithoutTenantInput.schema';
import { SubscriptionUncheckedUpdateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedUpdateWithoutTenantInput.schema';
import { SubscriptionCreateWithoutTenantInputObjectSchema } from './SubscriptionCreateWithoutTenantInput.schema';
import { SubscriptionUncheckedCreateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubscriptionUpdateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const SubscriptionUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutTenantInput>;
export const SubscriptionUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
