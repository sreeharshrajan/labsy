import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInputObjectSchema } from './SubscriptionWhereUniqueInput.schema';
import { SubscriptionCreateWithoutTenantInputObjectSchema } from './SubscriptionCreateWithoutTenantInput.schema';
import { SubscriptionUncheckedCreateWithoutTenantInputObjectSchema } from './SubscriptionUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubscriptionCreateWithoutTenantInputObjectSchema), z.lazy(() => SubscriptionUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const SubscriptionCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutTenantInput>;
export const SubscriptionCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
