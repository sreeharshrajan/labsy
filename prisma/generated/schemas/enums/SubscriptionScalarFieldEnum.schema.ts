import { z } from 'zod';

export const SubscriptionScalarFieldEnumSchema = z.enum(['id', 'plan', 'status', 'startDate', 'endDate', 'renewalDate', 'createdAt', 'stripeId', 'tenantId'])

export type SubscriptionScalarFieldEnum = z.infer<typeof SubscriptionScalarFieldEnumSchema>;