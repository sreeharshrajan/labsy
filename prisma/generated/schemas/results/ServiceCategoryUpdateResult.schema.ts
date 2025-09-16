import { z } from 'zod';
export const ServiceCategoryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  name: z.string(),
  slug: z.string(),
  tenantId: z.string(),
  tenant: z.unknown(),
  services: z.array(z.unknown())
}));