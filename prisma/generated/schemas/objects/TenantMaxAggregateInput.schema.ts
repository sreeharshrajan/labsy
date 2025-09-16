import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  labLicenseNumber: z.literal(true).optional(),
  contactEmail: z.literal(true).optional(),
  contactPhone: z.literal(true).optional(),
  gstin: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  canManageRoles: z.literal(true).optional(),
  maxCustomRoles: z.literal(true).optional(),
  maxUsers: z.literal(true).optional()
}).strict();
export const TenantMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantMaxAggregateInputType>;
export const TenantMaxAggregateInputObjectZodSchema = makeSchema();
