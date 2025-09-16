import { z } from 'zod';

export const SubscriptionPlanSchema = z.enum(['STARTER', 'GROWTH', 'ENTERPRISE', 'ONE_TIME'])

export type SubscriptionPlan = z.infer<typeof SubscriptionPlanSchema>;