import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionScalarWhereInputObjectSchema } from './SubscriptionScalarWhereInput.schema';
import { SubscriptionUpdateManyMutationInputObjectSchema } from './SubscriptionUpdateManyMutationInput.schema';
import { SubscriptionUncheckedUpdateManyWithoutTenantInputObjectSchema } from './SubscriptionUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubscriptionUpdateManyMutationInputObjectSchema), z.lazy(() => SubscriptionUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const SubscriptionUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutTenantInput>;
export const SubscriptionUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
