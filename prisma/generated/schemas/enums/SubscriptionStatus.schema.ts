import { z } from 'zod';

export const SubscriptionStatusSchema = z.enum(['ACTIVE', 'TRIAL', 'CANCELED', 'EXPIRED'])

export type SubscriptionStatus = z.infer<typeof SubscriptionStatusSchema>;