import { z } from 'zod';

import { SubscriptionPlanSchema } from '../../enums/SubscriptionPlan.schema';
import { SubscriptionStatusSchema } from '../../enums/SubscriptionStatus.schema';
// prettier-ignore
export const SubscriptionResultSchema = z.object({
    id: z.string(),
    plan: SubscriptionPlanSchema,
    status: SubscriptionStatusSchema,
    startDate: z.date(),
    endDate: z.date().nullable(),
    renewalDate: z.date().nullable(),
    createdAt: z.date(),
    stripeId: z.string().nullable(),
    tenantId: z.string(),
    tenant: z.unknown()
}).strict();

export type SubscriptionResultType = z.infer<typeof SubscriptionResultSchema>;
