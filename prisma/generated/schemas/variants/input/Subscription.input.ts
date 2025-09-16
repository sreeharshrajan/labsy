import { z } from 'zod';

import { SubscriptionPlanSchema } from '../../enums/SubscriptionPlan.schema';
import { SubscriptionStatusSchema } from '../../enums/SubscriptionStatus.schema';
// prettier-ignore
export const SubscriptionInputSchema = z.object({
    id: z.string(),
    plan: SubscriptionPlanSchema,
    status: SubscriptionStatusSchema,
    startDate: z.date(),
    endDate: z.date().optional().nullable(),
    renewalDate: z.date().optional().nullable(),
    createdAt: z.date(),
    stripeId: z.string().optional().nullable(),
    tenantId: z.string(),
    tenant: z.unknown()
}).strict();

export type SubscriptionInputType = z.infer<typeof SubscriptionInputSchema>;
