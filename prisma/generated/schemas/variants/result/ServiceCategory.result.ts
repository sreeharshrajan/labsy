import { z } from 'zod';

// prettier-ignore
export const ServiceCategoryResultSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    name: z.string(),
    slug: z.string(),
    tenantId: z.string(),
    tenant: z.unknown(),
    services: z.array(z.unknown())
}).strict();

export type ServiceCategoryResultType = z.infer<typeof ServiceCategoryResultSchema>;
