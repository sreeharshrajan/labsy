import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInputObjectSchema } from './SubscriptionWhereUniqueInput.schema';
import { SubscriptionUpdateWithoutTenantInputObjectSchema } from './SubscriptionUpdateWithoutTenantInput.schema';
import { SubscriptionUncheckedUpdateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubscriptionUpdateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const SubscriptionUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutTenantInput>;
export const SubscriptionUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
