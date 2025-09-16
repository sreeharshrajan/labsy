import { z } from 'zod';

// prettier-ignore
export const ServiceCategoryInputSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    name: z.string(),
    slug: z.string(),
    tenantId: z.string(),
    tenant: z.unknown(),
    services: z.array(z.unknown())
}).strict();

export type ServiceCategoryInputType = z.infer<typeof ServiceCategoryInputSchema>;
