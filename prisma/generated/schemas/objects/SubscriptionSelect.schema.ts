import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  plan: z.boolean().optional(),
  status: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  renewalDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  stripeId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional()
}).strict();
export const SubscriptionSelectObjectSchema: z.ZodType<Prisma.SubscriptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionSelect>;
export const SubscriptionSelectObjectZodSchema = makeSchema();
