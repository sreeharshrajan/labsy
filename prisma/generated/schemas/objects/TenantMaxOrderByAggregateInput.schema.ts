import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  labLicenseNumber: SortOrderSchema.optional(),
  contactEmail: SortOrderSchema.optional(),
  contactPhone: SortOrderSchema.optional(),
  gstin: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  canManageRoles: SortOrderSchema.optional(),
  maxCustomRoles: SortOrderSchema.optional(),
  maxUsers: SortOrderSchema.optional()
}).strict();
export const TenantMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMaxOrderByAggregateInput>;
export const TenantMaxOrderByAggregateInputObjectZodSchema = makeSchema();
