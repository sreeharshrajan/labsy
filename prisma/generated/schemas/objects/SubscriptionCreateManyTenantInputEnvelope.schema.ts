import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionCreateManyTenantInputObjectSchema } from './SubscriptionCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubscriptionCreateManyTenantInputObjectSchema), z.lazy(() => SubscriptionCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubscriptionCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.SubscriptionCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionCreateManyTenantInputEnvelope>;
export const SubscriptionCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
